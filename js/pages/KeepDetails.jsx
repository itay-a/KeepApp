const { Link } = ReactRouterDOM

import { keepService } from "../services/keep.service.js";
// import { eventBusService } from "../services/event-bus-service.js";

export class KeepDetails extends React.Component {

  state = {
    keep: null
  }

  componentDidMount() {
    this.loadKeep()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.keepId !== this.props.match.params.keepId) {
      this.loadKeep()
    }   
  }
  
  loadKeep = () => {
    const id = this.props.match.params.keepId
    keepService.getKeepById(id)
      .then(keep => {
        if (!keep) this.props.history.push('/')
        this.setState({ keep })
      })
  }

  onDeleteKeep = () => {
    keepService.deleteKeep(this.state.keep.id).then(this.onBack)
    // eventBusService.emit('user-msg', {txt:'keep deleted!'})
  }

  onBack = () => {
    this.props.history.push('/keep')
  }

  render() {
    const { keep } = this.state
    if (!keep) return <div>Loading...</div>
    return (
      <section className='keep-details'>
      </section>
    );
  }

}
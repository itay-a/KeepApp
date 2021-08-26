const { Link } = ReactRouterDOM

import { keepService } from '../apps/keep/services/keep.service.js'
import { KeepList } from '../apps/keep/cmps/KeepList.jsx'
import { KeepFilter } from '../apps/keep/cmps/KeepFilter.jsx'
// import { eventBusService } from '../services/event-bus-service.js'

export class KeepApp extends React.Component {
  state = {
    keeps: [],
    filterBy: null,
  };

  componentDidMount() {
    // const urlSrcPrm = new URLSearchParams(this.props.location.search)
    // const res = urlSrcPrm.get('q')
    // for (const [key, val] of urlSrcPrm) {
    //   console.log('key: ', key);
    //   console.log('val: ', val);
    // }
    this.loadKeeps()
  }

  loadKeeps = () => {
    keepService.query(this.state.filterBy).then((keeps) => {
      this.setState({ keeps });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadKeeps);
  };

  get urlParamCtg() {
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    return urlSrcPrm.get('ctg')
  }


  get keepsToDisplay() {
    const { keeps } = this.state
    const ctg = this.urlParamCtg
    return keeps.filter(keep => !ctg || keep.ctg === ctg)
  }



  render() {

    return (
      <section className='keep-app'>
        <KeepFilter onSetFilter={this.onSetFilter} />
        {/* <section>
          <Link to="/keep/edit">Add Keep</Link>
        </section> */}
        <KeepList keeps={this.keepsToDisplay} onSelectKeep={this.onSelectKeep} />
      </section>
    );
  }
}

const { Link } = ReactRouterDOM

import { keepService } from '../apps/keep/services/keep.service.js'
import { KeepList } from '../apps/keep/cmps/KeepList.jsx'
import { KeepFilter } from '../apps/keep/cmps/KeepFilter.jsx'
import { eventBusService } from '../services/event-bus-service.js'
import { KeepAdd } from '../apps/keep/cmps/KeepAdd.jsx'
import { utilService } from '../../js/services/util.service.js'

export class KeepApp extends React.Component {
  state = {
    keeps: [],
    filterBy: null,
    keepText: ''
  };

  componentDidMount() {
    this.removeEventBus = eventBusService.on('on-delete-keep', (id) => {
      keepService.deleteKeep(id)
      this.loadKeeps()
    })
    this.loadKeeps()
  }

  loadKeeps = () => {
    keepService.query(this.state.filterBy).then((keeps) => {
      this.setState({ keeps });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadKeeps);
    this.loadKeeps(filterBy)

  };

  onAddKeep = (keepToAdd) => {
    let newKeep = {}
    if (keepToAdd.keepType === 'text-keep') {
      newKeep = {

        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { txt: keepToAdd.keepText, title: keepToAdd.keepTitle }

      }
    }
    if (keepToAdd.keepType === 'img-keep') {
      newKeep = {

        id: utilService.makeId(),
        type: "note-img",
        isPinned: true,
        info: { url: keepToAdd.keepImg, title: keepToAdd.keepTitle }

      }
    }
    if (keepToAdd.keepType === 'todo-keep') {
      newKeep = {

        id: utilService.makeId(),
        type: "note-todos",
        info: { label:keepToAdd.keepLabel,
           todos: [
             {txt: keepToAdd.keepTodo, doneAt: new Date().toLocaleDateString() }
           ]
          }
      }
    }
    if (keepToAdd.keepType === 'video-keep') {
      newKeep = {

        id: utilService.makeId(),
        type: "note-video",
        isPinned: true,
        info: { url: keepService.embedVideo(keepToAdd.keepVideo), title: keepToAdd.keepTitle }

      }
    }
    keepService.addKeep(newKeep)
    this.loadKeeps()

  }

  render() {

    if (!this.state.keeps) return <div>Loading...</div>
    return (
      <section className='keep-app'>
        <div className="preview-nav">
          <KeepFilter onSetFilter={this.onSetFilter} />
          <KeepAdd onAddKeep={this.onAddKeep} />
        </div>
        <KeepList keeps={this.state.keeps} />
      </section>
    );
  }
}

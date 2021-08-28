import { KeepTxt } from './KeepTxt.jsx';
import { KeepImg } from './KeepImg.jsx';
import {KeepTodo } from './KeepTodo.jsx';
import { eventBusService} from '../../../services/event-bus-service.js' 

export class KeepPreview extends React.Component {

    get keepType() {
        return this.props.keep.type;
    }

    onDeletePreview = (id) => {
        eventBusService.emit('on-delete-keep', id)
    }

    render() {

        const DynamicCmp = (props) => {
            switch (this.keepType) {
                case 'note-txt':
                    return <KeepTxt {...props} />
                case 'note-img':
                    return <KeepImg {...props} />
                case 'note-todos':
                    return <KeepTodo {...props} />
            }
        }
        const { props } = this;

        return (
            <div className="keep flex-column">
                <DynamicCmp {...props} />
                <button className="delete-btn" onClick={() => this.onDeletePreview(this.props.keep.id)}>Delete</button>
            </div>
        )
    }
}
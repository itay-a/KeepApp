import { KeepTxt } from './KeepTxt.jsx';
import { KeepImg } from './KeepImg.jsx';
import {KeepTodo } from './KeepTodo.jsx';

export class KeepPreview extends React.Component {

    get keepType() {
        return this.props.keep.type;
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
            <DynamicCmp {...props} />
        )
    }
}
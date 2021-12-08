
export class KeepAdd extends React.Component {

    state = {
        keepType: '',
        keepTitle: '',
        keepText: '',
        keepLabel: '',
        keepImg:'',
        keepTodo:'',
        keepVideo:'',
    }

    onSelectType = (keepType) => {
        this.setState({ keepType })
    }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ ...this.state.keepText, [field]: value  }) //try delete keepText so title will update too
    };

    handleAddKeep = (ev) => {
        ev.preventDefault();
        this.onSelectType()
        this.props.onAddKeep(this.state)
    }

    render() {

        return (
            <div>
                <div className="add-btn">
                    <button onClick={() => { this.onSelectType('text-keep') }}>Add Text Keep</button>
                    <button onClick={() => { this.onSelectType('img-keep') }}>Add Picture Keep</button>
                    <button onClick={() => { this.onSelectType('todo-keep') }}>Add Todo Keep</button>
                    <button onClick={() => { this.onSelectType('video-keep') }}>Add Video Keep</button>
                </div>
                {
                    (this.state.keepType === 'text-keep')
                        ?
                        <form className="form-add" onSubmit={this.handleAddKeep}>
                            <input name="keepTitle" type='text' placeholder='Enter title' onChange={this.handleTextChange}></input>
                            <input name="keepText" type='text' placeholder='Enter text' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""
                }
                {
                    (this.state.keepType === 'img-keep') 
                    ?
                        <form className="form-add" onSubmit={this.handleAddKeep}>
                            <input name='keepTitle' type='text' placeholder='Insert picture title' onChange={this.handleTextChange}></input>
                            <input name='keepImg' type='text' placeholder='Insert picture link' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""

                }
                {
                    (this.state.keepType === 'todo-keep') 
                    ?
                        <form className="form-add" onSubmit={this.handleAddKeep}>
                            <input name='keepLabel' type='text' placeholder='Insert todos label' onChange={this.handleTextChange}></input>
                            <input name='keepTodo' type='text' placeholder='Insert todo text' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""

                }
                {
                    (this.state.keepType === 'video-keep') 
                    ?
                        <form className="form-add" onSubmit={this.handleAddKeep}>
                            <input name='keepTitle' type='text' placeholder='Insert video title' onChange={this.handleTextChange}></input>
                            <input name='keepVideo' type='text' placeholder='Insert YouTube link' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""

                }

            </div>
        )
    }
}

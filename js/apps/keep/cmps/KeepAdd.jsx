
export class KeepAdd extends React.Component {

    state = {
        keepType: '',
        keepTitle: '',
        keepText: '',
        keepLabel: '',
        keepImg:'',
        keepTodo:'',

    }

    onSelectType = (keepType) => {
        this.setState({ keepType })
    }

    handleTextChange = (ev) => {
        console.log(ev.target.name);
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ ...this.state.keepText, [field]: value  })
    };

    handleAddKeep = (ev) => {
        console.log('iatuy');
        ev.preventDefault();
        console.log(this.state);
        this.props.onAddKeep(this.state)
    }


    render() {

        return (
            <div>
                <div className="add-btn">
                    <button onClick={() => { this.onSelectType('text-keep') }}>Text Keep</button>
                    <button onClick={() => { this.onSelectType('img-keep') }}>Picture Keep</button>
                    <button onClick={() => { this.onSelectType('todo-keep') }}>Todo Keep</button>
                </div>
                {
                    (this.state.keepType === 'text-keep')
                        ?
                        <form onSubmit={this.handleAddKeep}>
                            <input name="keepTitle" type='text' placeholder='Enter title' onChange={this.handleTextChange}></input>
                            <input name="keepText" type='text' placeholder='Enter text' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""
                }
                {
                    (this.state.keepType === 'img-keep') 
                    ?
                        <form onSubmit={this.handleAddKeep}>
                            <input name='keepTitle' type='text' placeholder='Insert picture title' onChange={this.handleTextChange}></input>
                            <input name='keepImg' type='text' placeholder='Insert picture link' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""

                }
                {
                    (this.state.keepType === 'todo-keep') 
                    ?
                        <form onSubmit={this.handleAddKeep}>
                            <input name='keepLabel' type='text' placeholder='Insert todos label' onChange={this.handleTextChange}></input>
                            <input name='keepTodo' type='text' placeholder='Insert todo text' onChange={this.handleTextChange}></input>
                            <button>Add</button>

                        </form>
                        : ""

                }

            </div>
        )
    }
}

export class MailFilter extends React.Component {

    state = {
        filterBy : {
            text: ''

        }

    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        this.setState({filterBy: {...this.state.filterBy, [field]: value}}, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter =(ev) => {
        ev.preventDefault();
    }

    render() {

        const {text} = this.state.filterBy
        return(
            <form className="mail-filter" onSubmit={this.onFilter}>
                <label htmlFor="by-text"></label>
                <input name="text" id="by-text" type="text" placeholder="search text" value={text} onChange={this.handleChange}/>
                <button>Email Search</button>
            </form>
        )
    }
}
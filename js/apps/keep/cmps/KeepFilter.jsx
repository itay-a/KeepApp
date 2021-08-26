export class KeepFilter extends React.Component {
  state = {
    filterBy: {
      type: '',
    },
  };

  inputRef = React.createRef()

  componentDidMount() {
    this.inputRef.current.focus()
    document.querySelector('input').focus()
  }


  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.type;
    this.setState({ filterBy: { [field]: value } }, () => {
      this.props.onSetFilter(this.state.filterBy)
    });
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy)
  };

  onSelectFilter = (ev) => {
    console.log(ev);
    const type = ev.target.name;
    console.log(type);

  }

  render() {
    const { type } = this.state.filterBy;
    return (
      <form className='keep-filter-search' onSubmit={this.onFilter}>
        <label htmlFor='by-Type'>Filter Keeps</label>
        <input
          ref={this.inputRef}
          name='type'
          id='by-type'
          type='text'
          placeholder='search keeps'
          value={type}
          onChange={this.handleChange}
        />
        <select className="keep-filter-drop" onKeyUp={this.onSelectFilter}>
          <option value="1">Select Filter</option>
          <option value="2">Text Keep</option>
          <option value="3">video Keep</option>
          <option value="4">Photo Keep</option>
          <option value="5">Todo Keep</option>
        </select>

      </form>
    );
  }
}
export class KeepFilter extends React.Component {
  state = {
    filterBy: {
      text: '',
      // type:''
    },
  };

  handleChange = (ev) => {
    console.log(ev.target);
    const field = ev.target.name;
    const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
    this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
    this.props.onSetFilter(this.state.filterBy)
    });
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy)
  };

  onSelectFilter = (ev) => {
    console.log(ev.target.name);
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
      this.props.onSetFilter(this.state.filterBy)
      });
  }

  render() {
    const { text } = this.state.filterBy;
    const { type } = this.state.filterBy;

    return (
      <form className='keep-filter-search' onSubmit={this.onFilter}>
        <label htmlFor='by-text'>Filter</label>
        <input
          name='text'
          id='by-type'
          type='text'
          placeholder='search keeps'
          value={text}
          onChange={this.handleChange}
        />
        <select className="keep-filter-drop" onSelect={this.onSelectFilter}>
          <option value="">Select Filter</option>
          <option value="note-txt">Text</option>
          <option value="note-img">video</option>
          <option value="note-todos">Photo</option>
          {/* <option value="note-video">Todo</option> */}
        </select>

      </form>
    );
  }
}
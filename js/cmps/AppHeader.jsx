const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {
    
    render() {
        return (
            <section className="app-header">
                <h1 onClick={() => this.props.history.goBack()}>KeepApp</h1>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/keep" >My Keeps</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
            </section>

        )
    }
}
export const AppHeader = withRouter(_AppHeader)
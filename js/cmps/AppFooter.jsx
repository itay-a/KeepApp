

const { NavLink, withRouter } = ReactRouterDOM

class _AppFooter extends React.Component {


    render() {
        return (

            <section className="app-footer">
                <h1>KeepApp</h1>
                <span>Coffee Rights Black No Sugar</span>
            </section>

        )
    }


}
export const AppFooter = withRouter(_AppFooter)


const { NavLink, withRouter } = ReactRouterDOM

class _AppFooter extends React.Component {


    render() {
        return (

            <section className="app-footer">
                <h1>Footer</h1>
                <span>Coffee Rights Black</span>
            </section>

        )
    }


}
export const AppFooter = withRouter(_AppFooter)
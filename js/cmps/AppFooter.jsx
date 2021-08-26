

const { NavLink, withRouter } = ReactRouterDOM

class _AppFooter extends React.Component {


    render() {
        return (

            <section className="app-footer">
                <h1>Footer</h1>
                <p>Coffee Rights Black</p>
            </section>

        )
    }


}
export const AppFooter = withRouter(_AppFooter)
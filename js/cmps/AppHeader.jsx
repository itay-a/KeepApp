

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {


    render() {
        return (

            <section className="app-header">
                <h1>CHECK</h1>


            </section>

        )
    }


}
export const AppHeader = withRouter(_AppHeader)
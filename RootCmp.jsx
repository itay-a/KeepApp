
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { AppFooter } from './js/cmps/AppFooter.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
import { AppMail } from './js/pages/AppMail.jsx';
import { AppKeep } from './js/pages/AppKeep.jsx';
import { Home } from './js/pages/Home.jsx';
import { About } from './js/pages/About.jsx';





export function App() {

    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route path="/keep" component={AppKeep} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>

            <footer>
                <AppFooter />
            </footer>
        </Router>
    );
}
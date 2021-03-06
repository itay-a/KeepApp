const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { AppFooter } from './js/cmps/AppFooter.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
import { KeepApp } from './js/pages/KeepApp.jsx';
import { Home } from './js/pages/Home.jsx';
import { About } from './js/pages/About.jsx';

export function App() {

    return (
        <Router>
            <section className="main-appsus">
                <header>
                    <AppHeader />
                </header>
                <main>
                    <Switch>
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                </main>
                <footer>
                    <AppFooter />
                </footer>
            </section>
        </Router>
    );
}
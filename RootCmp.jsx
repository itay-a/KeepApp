
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { AppFooter } from './js/cmps/AppFooter.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
import { MailApp } from './js/pages/MailApp.jsx';
import { KeepApp } from './js/pages/KeepApp.jsx';





export function App() {





    return (
        <Router>
            <header>
                <AppHeader />

            </header>


            {/* <main>

                <MailApp />
                <KeepApp />

            </main> */}



            <footer>
                <AppFooter />
            </footer>
        </Router>
    );
}
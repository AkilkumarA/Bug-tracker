import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './Header';
import Footer from './Footer';
import TicketsList from '../tickets/TicketsList';
import Board from '../board/ProgressBoard';

class RootView extends React.Component {
    render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <Header />
                    <div class="mdl-layout__drawer">
                        <span class="mdl-layout-title">Bug Tracker</span>
                        <nav class="mdl-navigation">
                            <a class="mdl-navigation__link" href="/tickets">Issues</a>
                            <a class="mdl-navigation__link" href="/board">Progress Board</a>
                        </nav>
                    </div>
                    <main className="mdl-layout__content">
                        <div className="page-content" style={{ "padding": "30px" }}>
                            <Route path="/tickets" component={() => <TicketsList />} />
                            <Route path="/board" component={() => <Board />} />
                        </div>
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default RootView;
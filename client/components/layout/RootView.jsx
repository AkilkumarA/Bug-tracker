import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import VerticalNav from './VerticalNav';
import TicketsList from '../tickets/TicketsList';
import TicketView from '../tickets/TicketView';
import Board from '../board/ProgressBoard';

class RootView extends React.Component {
    render() {
        return (
            <Router>
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <Header />
                    <VerticalNav />
                    <main className="mdl-layout__content">
                        <div className="page-content" style={{ "padding": "30px" }}>
                                <Route exact path="/tickets" component={() => <TicketsList />} />
                                <Route path="/tickets/:ticketId" component={TicketView} />
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
import React from 'react';

import Header from './Header';
import Footer    from './Footer';
import ViewTickets from '../viewTickets/ViewTickets';

class RootView extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <ViewTickets />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default RootView;
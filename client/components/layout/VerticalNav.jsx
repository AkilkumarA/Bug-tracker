import React from 'react';

class VerticalNav extends React.Component {
    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Bug Tracker</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="/#/tickets">Issues</a>
                    <a className="mdl-navigation__link" href="/#/board">Progress Board</a>
                </nav>
            </div>
        )
    }
}

export default VerticalNav;
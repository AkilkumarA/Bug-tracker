import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Bug Tracker</span>
                    <div className="mdl-layout-spacer"></div>
                </div>
            </header>
        )
    }
}

export default Header;
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">Bug Tracker</span>
                    <div class="mdl-layout-spacer"></div>
                </div>
            </header>
        )
    }
}

export default Header;
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="mdl-mini-footer">
                <div className="mdl-logo">Bug Tracker with Logo</div>
                <div className="mdl-mini-footer__right-section">
                    <ul className="mdl-mini-footer__link-list">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy & Terms</a></li>
                        <li><a href="#">&copy; Copyright {new Date().getFullYear()}</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;
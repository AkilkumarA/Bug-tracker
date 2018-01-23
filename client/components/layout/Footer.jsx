import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer class="mdl-mini-footer">
                <div class="mdl-logo">Bug Tracker with Logo</div>
                <div class="mdl-mini-footer__right-section">
                    <ul class="mdl-mini-footer__link-list">
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
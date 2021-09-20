import React from 'react';

import facebook from '../../assets/icons/Facebook F.svg';
import instagram from '../../assets/icons/Instagram logo.svg';
import twitter from '../../assets/icons/Twitter.svg';

import './Footer.css';
function Footer(props) {
    return (
        <footer className="footer">
            <div className="social-media">
                <ul>
                    <div className="logo-container">
                    <li>
                        <a href="https://web.facebook.com/groups/feed/"><img src={facebook} alt="facebook"/></a>
                    </li>
                    </div>
                    <div className="logo-container">
                    <li>
                        <a href="https://web.facebook.com/groups/feed/"><img src={twitter} alt="facebook"/></a>
                    </li>
                    </div>
                    <div className="logo-container">
                    <li>
                        <a href="https://web.facebook.com/groups/feed/"><img src={instagram} alt="facebook"/></a>
                    </li>
                    </div>
                </ul>
            </div>
            <div className="footer-links">
                <ul>
                    <li>
                        <a href="/contact">
                            <div className="a-contact">
                                <span>Contact</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/terms">Terms & Conditions</a>
                    </li>
                </ul>
            </div>
            <div className="footer-copy">
                <span>&copy;2021 CopyRight | All Rights Reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
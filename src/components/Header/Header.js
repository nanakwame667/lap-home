import React from 'react';

import { NavDropdown } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { useCart } from '../../CartContext';
import cart from '../../assets/icons/Online Shopping.svg';
import logo from '../../assets/icons/logo-lap.svg';

import './Header.css';
function Header(props) {
    const history=useHistory();
    const items=useCart();
    console.log(items);
    return (
        <header className="container">
            <div className="header">
                
                <div type="button" className="header-logo" onClick={()=>history.push('/')}>
                    <img src={logo} alt="logo"/>
                    <span style={{fontFamily:'raleway-eb',paddingLeft:5}}>lap|</span>
                    <span>home</span>
                </div>
                
                <div className="header-links">
                    <ul>
                        <li>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Categories"
                            menuVariant="dark"
                            className="header-link"
                        >
                            <NavDropdown.Item  onClick={()=>history.push('/hp')}>Hp</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>history.push('/apple')}>MacBook</NavDropdown.Item>
                        </NavDropdown>
                        </li>
                        <li>
                            <div type="button" onClick={()=>history.push('/contact')} className="header-link">Contact</div>
                        </li>
                        <li>
                            <div type="button" onClick={()=>history.push('/carts')} className="cart-link">
                                <span className="link-number">{items.length}</span>
                                <span><img src={cart} alt="cart"/></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
import logo from "../../logo.svg";
import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="Main-header">
            <span>
                <img src={logo} className="Main-logo" alt="logo"/>
                <label>Price Tracker</label>
            </span>
        </header>
    )
}

export default Header;
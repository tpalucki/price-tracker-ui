import logo from "../../logo.svg";
import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={logo} className="logo" alt="logo"/>
                        <label className="fs-2">Price Tracker</label>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" data-dashlane-rid="680ee9a5974799cf"
                          data-form-type="">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..."
                               aria-label="Search" data-dashlane-rid="cb549f9ccf61dc4d" data-form-type=""/>
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
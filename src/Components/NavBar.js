import React from 'react';
import '../styles/navbar.css'

const NavBar = ({ brand }) => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <a
                    href='#!' className='navbar-brand'>{brand}
                </a>
                <div id='user-profile'>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <h1
                        className='navbar-profile'>Edwin Veloz
                    </h1>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
import React from 'react';

const NavBar = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__list-item">technology</li>
                <li className="menu__list-item">projects</li>
                <li className="menu__list-item">about</li>
                <li className="menu__list-item">contacts</li>
            </ul>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import './Header.css';
import NavLink from './NavLink';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <div className="navDiv">
                        <NavLink image="images/fily.svg" to="/" name="Fily" />
                        <NavLink to="/documents" name="Documents" />
                        <NavLink to="/profile" name="Profile" />
                        <NavLink to="/about" name="About" />
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;
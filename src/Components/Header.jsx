import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <nav className={menuOpen ? "nav-open" : ""}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;

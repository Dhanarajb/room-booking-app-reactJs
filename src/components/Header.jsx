import React from 'react';
import '../App.css'; // Import CSS for styling

function Header() {
    return (
        <header className="app-header">
            <div className="header-logo">MyBookingApp</div>
            <nav className="header-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;

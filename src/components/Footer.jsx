import React from 'react';
import '../App.css'; // Import CSS for styling

function Footer() {
    return (
        <footer className="app-footer">
            <p>&copy; 2024 MyBookingApp. All rights reserved.</p>
            <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;

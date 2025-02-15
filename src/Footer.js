import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-container">
            <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

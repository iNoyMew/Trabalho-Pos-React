import React from 'react';

import logo from "../src/assets/topo.png";

export default function Header() {
    return (
        <header className="header-container">
            <img src={logo} alt="Logo do Projeto" className="header-logo" />
            <div className="header-text">
                <h1>Projeto Pos React</h1>
                <h2>Meu Trabalho</h2>
            </div>
        </header>
    );
}

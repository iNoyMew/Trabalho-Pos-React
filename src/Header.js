import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../src/assets/topo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Navbar color="dark" dark expand="md" className="px-4">
            <NavbarBrand href="/">
                <img src={logo} alt="Logo do Projeto" className="header-logo me-2" />
                Projeto Pos React
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/" activeclassname="active">
                            Início
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        
                        <NavLink tag={Link} to="/sobre-nos" activeclassname="active">
                            Sobre
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

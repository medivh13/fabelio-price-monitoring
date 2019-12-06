import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


const Header = () => (
    <Navbar>
        <Navbar.Brand href="/">Submitting Link </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/products">Product List</Nav.Link>
        </Nav>
    </Navbar>
)

export default Header;
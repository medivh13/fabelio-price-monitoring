import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <nav>
        <ul>
        <li>
            <Link to="/">Page 1 (Form)</Link>
        </li>
        <li>
            <Link to="/products">Page 2 (Product List)</Link>
        </li>
        </ul>
    </nav>
)

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/timesheet">New Timesheet</Link>
                </li>
                <li>
                    <Link to="/history">Timesheet History</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

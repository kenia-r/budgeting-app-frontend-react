import { NavLink } from 'react-router-dom';
import React from 'react'

export default function NavBar() {
    return (
        <nav className="nav nav-tabs">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/transactions" className="nav-link">Transactions</NavLink>
            <NavLink to="/transactions/new" className="nav-link">New Transaction</NavLink>
        </nav>
    )
}


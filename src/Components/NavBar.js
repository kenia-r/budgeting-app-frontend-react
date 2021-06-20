import { NavLink } from 'react-router-dom';
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/transactions">Transactions Index</NavLink>
            <NavLink to="/transactions/new">New Transaction</NavLink>
            {/* <NavLink to="/transactions/edit"></NavLink>
            <NavLink to="*"></NavLink> */}
        </nav>
    )
}


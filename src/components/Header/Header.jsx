import React from 'react';
import './Header.css';
import {NavLink } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

const Header = ({toggle}) => {
    return (
        <div className="nav">
                <NavLink to="/"  className="nav-link">T
                <span style={{color: '#ffc500'}}>em</span>p.</NavLink>
                <NavLink to="/"  className="nav-icon" onClick={toggle}>
                    <p>Menu</p>
                    <FaUtensils className="fa-utensils" />
                </NavLink>
        </div>
    );
};

export default Header;
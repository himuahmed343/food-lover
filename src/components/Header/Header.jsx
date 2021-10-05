import React from 'react';
import './Header.css';
import {NavLink, Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = ({toggle}) => {
    return (
        <div className="nav">
               <Link to="/cart" className="cart-ico">
                    <AiOutlineShoppingCart className="shopping-cart" />
                </Link>                
                <NavLink to="/"  className="nav-link">Food<span style={{color: '#ffc500', fontSize: "3rem"}}>.</span>Lover</NavLink>

                <NavLink to=""  className="nav-icon" onClick={toggle}>
                    <p>Menu</p>
                    <FaUtensils className="fa-utensils" />
                </NavLink>
        </div>
    );
};

export default Header;
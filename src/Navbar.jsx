import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {

    return (
        <>
        <NavLink exact activeClassName="active_class" to="/"> About Us</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact"> Contact Us</NavLink>
        <NavLink exact activeClassName="active_class" to="/services"> Services</NavLink>
        <NavLink exact activeClassName="active_class" to="/blog"> Blog</NavLink>
        <NavLink exact activeClassName="active_class" to="/search"> Search</NavLink>
        <NavLink exact activeClassName="active_class" to="/search"> Demo</NavLink>
        <NavLink exact activeClassName="active_class" to="/user/prasad/joshi"> User</NavLink>
        </>
    );

};

export default Navbar;
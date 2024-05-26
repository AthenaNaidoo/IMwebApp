import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";
import { useState, useEffect } from 'react';
import './navBar.css';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 20){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        };
//checking if the page has been scrolled down to change how navbar looks 

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return(
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className='"nav-container'>
                <NavLink to="/" className="nav-logo">
                <GiPolarStar className='star' />               
                </NavLink>
                <div className='nav-menu'>

                <NavLink to="/design" activeClassName="active">
                    Design
                </NavLink>
                <NavLink to="/blog" activeClassName="active">
                Blog
                </NavLink>
                <NavLink to="/art" activeClassName="active">
                Art
                </NavLink>
                </div>
            </nav>
        </header>
    );
};
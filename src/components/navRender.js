import React, { useState, useEffect } from 'react';
import TripleLayer from './tripleLayer';
import ButtonRender from './buttonRender';
import { activateTopNav } from './animations';
import { buttonLockout } from './buttonRender';


function NavRender (data) {

    const [topNav, topNavChange] = useState('active');

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            if (document.getElementById('top_nav_activate').classList.contains('active') === false && window.scrollY > 100) {
                // Function for hiding the nav when you scroll the page
            }
        });
    }, [] );

    // Function for hiding the top nav bar
    const hideTopNav = () => {
        
    }
    // Function for showing the top nav bar
    const showTopNav = () => {

    }

    // Function for opening top nav, blurring the rest of the page and displaying all sub-menus
    const openTopNav = () => {

    }
    // Function for closing top nav
    const closeTopNav = () => {

    }

    // Filler function for navigation, to be made more elaborate later
    const navigate = (page) => {
        console.log(page + ' clicked!');
    }


    return(
        <>
        <nav id="top_nav" className='active'>
            <ul className='main'>
                <li><div className='top_button'>< TripleLayer name='top_nav' content='Home' /></div></li>
                <li><div className='top_button'>< TripleLayer name='top_nav' content='About' /></div></li>
                <li>Portfolio</li>
                <li>Projects</li>
            </ul>
            <ul className='submenu'>
                <ul>
                    <li>Bio</li>
                    <li>Links</li>
                    <li>Favs</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>Resume</li>
                    <li>Process</li>
                    <li>Case Studies</li>
                    <li>Examples</li>
                </ul>
                <ul>
                    <li>HVIU</li>
                    <li>Moby-Dick</li>
                </ul>
            </ul>
        </nav>
        <button className='activate' id="activate_top_nav">MENU</button>
        <nav id="side_nav">
            
        </nav>
        <button className='activate' id="activate_side_nav">NAV</button>

        <div id="menu_blur" className='full_blur'></div>
        </>
    )
}

export default NavRender;
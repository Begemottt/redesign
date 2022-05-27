import React, { useState, useEffect } from 'react';
import TripleLayer from '../tripleLayer';
import { hideTopNavAnim, showSubMenuAnim, hideSubMenuAnim, showTopNavAnim } from '../animations';
import buttonLockout from '../buttonLockout';
import TopNavButton from './topNavButton';


function NavRender () {

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            handleScrollMenus();
        });
    }, [] );

    // Function for hiding the menus when the screen is scrolled
    const handleScrollMenus = () => {
        let menu = document.getElementById('top_nav_main');
        let submenu = document.getElementById('top_nav_sub');
        // Check main menu
        if (menu.classList.contains('open') && window.scrollY > 200){
            closeTopNav();
        } else if (!menu.classList.contains('open') && window.scrollY === 0){
            openTopNav();
        }
        // Check sub menu
        if (submenu.classList.contains('open') && window.scrollY > 200){
            closeTopSubNav();
        }
    }

    // Function for hiding the top nav bar
    const openTopNav = () => {
        let topNav = document.getElementById('top_nav_main');
        topNav.classList.add('open');
        showTopNavAnim();
    }
    // Function for showing the top nav bar
    const closeTopNav = () => {
        let topNav = document.getElementById('top_nav_main');
        topNav.classList.remove('open');
        hideTopNavAnim();
    }

    // Function for opening top nav, blurring the rest of the page and displaying all sub-menus
    const openTopSubNav = () => {
        document.getElementById('menu_button_arrow').classList.add('turned');
        let el = document.getElementById('top_nav_sub');
        el.classList.add('open');
        showSubMenuAnim();
    }
    // Function for closing top nav
    const closeTopSubNav = () => {
        document.getElementById('menu_button_arrow').classList.remove('turned');
        let el = document.getElementById('top_nav_sub');
        el.classList.remove('open');
        hideSubMenuAnim();
    }

    // Function for handling clicks of the menu expansion button
    const menuButtonHandler = () => {
        let menu = document.getElementById('top_nav_main');
        let submenu = document.getElementById('top_nav_sub');
        if (submenu.classList.contains('open')){
            closeTopSubNav();
        } else if(!submenu.classList.contains('active') && menu.classList.contains('open')){
            openTopSubNav();
        } else {
            openTopNav();
        }
    }

    // Filler function for navigation, to be made more elaborate later



    return(
        <>
        {/* Add actual navigation functionality later */}
        <nav id="top_nav">
            <ul className='main open' id='top_nav_main'>
                {/* Main categories go here */}
                < TopNavButton content='Home' />
                < TopNavButton content='About' />
                < TopNavButton content='Portfolio' />
                < TopNavButton content='Projects' />
            </ul>
            <ul className='submenu' id='top_nav_sub'>
                {/* Replace this with another menu if I come up with other stuff for the home category */}
                <div className='menu_filler'></div>
                <ul className='menu'>
                    < TopNavButton content='Bio' />
                    < TopNavButton content='Links' />
                    < TopNavButton content='Favs' />
                    < TopNavButton content='Contact' />
                </ul>
                <ul className='menu'>
                    < TopNavButton content='Resume' />
                    < TopNavButton content='Process' />
                    < TopNavButton content='Case Studies' />
                    < TopNavButton content='Examples' />
                </ul>
                <ul className='menu'>
                    < TopNavButton content='HVIU' />
                    < TopNavButton content='Moby-Dick' />
                </ul>
            </ul>
            <button 
                className='activate visible'
                id="top_nav_activate"
                alt='MENU'
                onClick={
                    ()=>(buttonLockout('top_nav_activate', 1000, menuButtonHandler))
                }>
                MENU <span id='menu_button_arrow'>⇓</span>
                </button>
        </nav>
        

        {/* <nav id="side_nav">
            
        </nav>
        <button className='activate' id="activate_side_nav">NAV</button>

        <div id="menu_blur" className='full_blur'></div> */}
        </>
    )
}

export default NavRender;
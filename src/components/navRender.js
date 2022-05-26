import React, { useState, useEffect } from 'react';
import TripleLayer from './tripleLayer';
import ButtonRender from './buttonLockout';
import { hideTopNavAnim, showSubMenuAnim, hideSubMenuAnim, showTopNavAnim } from './animations';
import buttonLockout from './buttonLockout';


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
    const navigate = (page) => {
        console.log(page + ' clicked!');
    }


    return(
        <>
        <nav id="top_nav">
            <ul className='main open' id='top_nav_main'>
                <li><div className='top_button'>< TripleLayer name='top_nav' content='Home' /></div></li>
                <li><div className='top_button'>< TripleLayer name='top_nav' content='About' /></div></li>
                <li><div className='top_button'>< TripleLayer name='top_nav' content='Portfolio' /></div></li>
                <li><div className='top_button'>< TripleLayer name='top_nav' content='Projects' /></div></li>
            </ul>
            <ul className='submenu' id='top_nav_sub'>
                <ul className='menu'>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Bio' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Links' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Favs' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Contact' /></div></li>
                </ul>
                <ul className='menu'>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Resume' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Process' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Case Studies' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Examples' /></div></li>
                </ul>
                <ul className='menu'>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='HVIU' /></div></li>
                    <li><div className='top_button'>< TripleLayer name='top_nav' content='Moby-Dick' /></div></li>
                </ul>
            </ul>
            <button className='activate visible' id="top_nav_activate" onClick={
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
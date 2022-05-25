import React, { useState, useEffect } from 'react';
import TripleLayer from './tripleLayer';
import ButtonRender from './buttonRender';
import { hideTopNavAnim, showTopNavAnim } from './animations';
import { buttonLockout } from './buttonRender';


function NavRender (data) {

    const [topNav, topNavChange] = useState('visible');

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            if (topNav === 'visible' && window.scrollY > 100) {
                // Function for hiding the nav when you scroll the page
                hideTopNav();
            } else if (topNav === 'hidden' && window.scrollY <= 100) {
                showTopNav();
            }
        });
    }, [] );

    // Function for hiding the top nav bar
    const hideTopNav = () => {
        let topNav = document.getElementById('top_nav_main');
        topNavChange((old_value)=>('hidden'));
        hideTopNavAnim();
    }
    // Function for showing the top nav bar
    const showTopNav = () => {
        let topNav = document.getElementById('top_nav_main');
        topNav.classList.add('visible');
        topNavChange((old_value)=>('visible'));
        showTopNavAnim();
    }

    // Function for opening top nav, blurring the rest of the page and displaying all sub-menus
    const openTopNav = () => {

    }
    // Function for closing top nav
    const closeTopNav = () => {

    }

    // Function for handling clicks of the menu expansion button
    const menuButtonHandler = (menu_state) => {

        if(menu_state === 'hidden'){
            showTopNav();
        } else if (menu_state === 'visible'){
            openTopNav();
        } else if (menu_state === 'open'){
            closeTopNav();
        }
    }

    // Filler function for navigation, to be made more elaborate later
    const navigate = (page) => {
        console.log(page + ' clicked!');
    }


    return(
        <>
        <nav id="top_nav">
            <ul className='main visible' id='top_nav_main'>
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
            <button className='activate visible' id="top_nav_activate" onClick={()=>{menuButtonHandler(topNav)}}>
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
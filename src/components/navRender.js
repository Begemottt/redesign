import React, { useState, useEffect } from 'react';
import ButtonRender from './buttonRender';
import { activateTopNav } from './animations';
import { buttonLockout } from './buttonRender';


function NavRender (data) {

    const [topNavActive, topNavActivate] = useState(true);

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            if (document.getElementById('top_nav_activate').classList.contains('active') === false && window.scrollY > 100) {
                activateTopNav(topNavActive, topNavActivate);
                console.log (topNavActive.valueOf());
            }
        });
    }, []
    );

    return(
        <>
        <nav id="top_nav" className='active'>
            < ButtonRender class='top_nav_button' id='top_nav_home' time={1000} func={()=>console.log('Home pressed!')} name='HOME' />
            
            <ul className='top_menu_container'>
                <li className='menu_button'>
                    < ButtonRender class='top_nav_button' id='top_nav_about' time={1000} func={()=>console.log('About pressed!')} name='ABOUT' />
                    <ul className='submenu about'>
                        <li>< ButtonRender class='sub_menu_button about' id='top_nav_bio' time={1000} func={()=>console.log('Bio pressed!')} name='BIO' /></li>
                        <li>< ButtonRender class='sub_menu_button about' id='top_nav_links' time={1000} func={()=>console.log('Links pressed!')} name='LINKS' /></li>
                        <li>< ButtonRender class='sub_menu_button about' id='top_nav_favorites' time={1000} func={()=>console.log('Favs pressed!')} name='FAVS' /></li>
                        <li>< ButtonRender class='sub_menu_button about' id='top_nav_contact' time={1000} func={()=>console.log('Contact pressed!')} name='CONTACT' /></li>
                    </ul>
                </li>
            </ul>
            <ul className='top_menu_container'>
                <li className='menu_button'>
                    < ButtonRender class='top_nav_button' id='top_nav_portfolio' time={1000} func={()=>console.log('Portfolio pressed!')} name='PORTFOLIO' />
                    <ul className='submenu portfolio'>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_resume' time={1000} func={()=>console.log('Bio pressed!')} name='RESUME' /></li>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_process' time={1000} func={()=>console.log('Process pressed!')} name='PROCESS' /></li>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_case_studies' time={1000} func={()=>console.log('Case studies pressed!')} name='CASE STUDIES' /></li>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_writing' time={1000} func={()=>console.log('Writing pressed!')} name='WRITING' /></li>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_examples' time={1000} func={()=>console.log('Examples pressed!')} name='EXAMPLES' /></li>
                    </ul>
                </li>
            </ul>
            
            <ul className='top_menu_container'>
                <li className='menu_button'>
                    < ButtonRender class='top_nav_button' id='top_nav_projects' time={1000} func={()=>console.log('Projects pressed!')} name='PROJECTS' />
                    <ul className='submenu projects'>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_hviu' time={1000} func={()=>console.log('HVIU pressed!')} name='HVIU' /></li>
                        <li>< ButtonRender class='sub_menu_button portfolio' id='top_nav_moby' time={1000} func={()=>console.log('Moby-Dick; or, the Whale pressed!')} name='MOBY DICK' /></li>
                    </ul>
                </li>
            </ul>
            
        </nav>
        
        <button className='activate' id='top_nav_activate' onClick={()=>(buttonLockout('top_nav_activate', 1000, activateTopNav(topNavActive, topNavActivate)))}>&#60;</button>
        <nav id="side_nav">
            
        </nav>
        </>
    )
}

export default NavRender;
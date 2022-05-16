import React, { useState, useEffect } from 'react';
import anime from 'animejs';
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
        })
    }, []
    );

    return(
        <>
        <nav id="top_nav" className='active'>
            < ButtonRender class='top_nav_button' id='top_nav_home' time={1000} func={()=>console.log('Home pressed!')} name='HOME' />
            < ButtonRender class='top_nav_button' id='top_nav_about' time={1000} func={()=>console.log('About pressed!')} name='ABOUT' />
            < ButtonRender class='top_nav_button' id='top_nav_portfolio' time={1000} func={()=>console.log('Portfolio pressed!')} name='PORTFOLIO' />
            < ButtonRender class='top_nav_button' id='top_nav_projects' time={1000} func={()=>console.log('Projects pressed!')} name='PROJECTS' />
        </nav>
        
        <button className='activate' id='top_nav_activate' onClick={()=>(buttonLockout('top_nav_activate', 1000, activateTopNav(topNavActive, topNavActivate)))}>&#60;</button>
        <nav id="side_nav">
            
        </nav>
        </>
    )
}

export default NavRender;
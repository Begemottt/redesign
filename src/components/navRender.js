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

    const showSubMenu = (name) => {
        let buttons = document.getElementsByClassName(name);
        if (!buttons.classList.contains('active')){
            buttons.classList.add('active');
        }
    }
    const hideSubMenu = (name) => {
        let buttons = document.getElementsByClassName(name);
        if (buttons.classList.contains('active')){
            buttons.classList.remove('active');
        }
    }
    const hideAllSubmenu = () => {
        let allButtons = document.getElementsByClassName('sub_menu_button');
        allButtons.forEach(element => {
            element.classList.contains('active') ? element.classList.remove('active') : null;
        });
    }

    return(
        <>
        <nav id="top_nav" className='active'>
            < ButtonRender class='top_nav_button' id='top_nav_home' time={1000} func={()=>console.log('Home pressed!')} name='HOME' />
            
            <div className='top_menu_container'>
                < ButtonRender class='top_nav_button' id='top_nav_about' time={1000} func={()=>console.log('About pressed!')} name='ABOUT' />
                < ButtonRender class='sub_menu_button about' id='top_nav_bio' time={1000} func={()=>console.log('Bio pressed!')} name='BIO' />
                < ButtonRender class='sub_menu_button about' id='top_nav_links' time={1000} func={()=>console.log('Links pressed!')} name='LINKS' />
                < ButtonRender class='sub_menu_button about' id='top_nav_favorites' time={1000} func={()=>console.log('Favs pressed!')} name='FAVS' />
            </div>


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
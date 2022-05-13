import React, { useState } from 'react';
import anime from 'animejs';
import ButtonRender from './buttonRender';
// import { buttonLockout } from './buttonRender';


function NavRender (data) {

    const [topNavActive, topNavActivate] = useState(true);

    const activateTopNav = (id) => {
        let nav = document.getElementById('top_nav');
        console.log('Acivating!!');

        if(!topNavActive){
            document.getElementById('top_nav_activate').classList.toggle('active');
            anime({
                targets: nav,
                left: 0,
                duration: 1000,
                easing: 'easeOutElastic(2, 1)',
                direction: 'forward',
                complete: function(anim){
                    topNavActivate(true);
                }
            })
        } else {
            document.getElementById('top_nav_activate').classList.toggle('active');
            anime({
                targets: nav,
                left: -800,
                duration: 1000,
                easing: 'easeInElastic(2, 1)',
                direction: 'forward',
                complete: function(anim){
                    topNavActivate(false);
                }
            })
        }
    }

    return(
        <>
        <nav id="top_nav" className='active'>
            < ButtonRender id='top_nav_home' time={1000} func={()=>console.log('Home pressed!')} name='HOME' />
            < ButtonRender id='top_nav_about' time={1000} func={()=>console.log('About pressed!')} name='ABOUT' />
            < ButtonRender id='top_nav_portfolio' time={1000} func={()=>console.log('Portfolio pressed!')} name='PORTFOLIO' />
            < ButtonRender id='top_nav_projects' time={1000} func={()=>console.log('Projects pressed!')} name='PROJECTS' />
            <button className='activate' id='top_nav_activate' onClick={()=>(activateTopNav())}>&#60;</button>
        </nav>
        <nav id="side_nav">
            
        </nav>
        </>
    )
}

export default NavRender;
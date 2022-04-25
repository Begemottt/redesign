import React from 'react';
import ButtonRender from './buttonRender';

function NavRender (data) {

    return(
        <nav>
            < ButtonRender id='top_nav_home' time={1000} func={()=>console.log('Home pressed!')} name='HOME' />
            < ButtonRender id='top_nav_about' time={1000} func={()=>console.log('About pressed!')} name='ABOUT' />
            < ButtonRender id='top_nav_portfolio' time={1000} func={()=>console.log('Portfolio pressed!')} name='PORTFOLIO' />
            < ButtonRender id='top_nav_projects' time={1000} func={()=>console.log('Projects pressed!')} name='PROJECTS' />
        </nav>
    )
}

export default NavRender;
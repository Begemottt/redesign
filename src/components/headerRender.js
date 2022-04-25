import React from "react";
import anime from "animejs";
import NavRender from './navRender';

function HeaderRender() {

    return (
        <header>
            <div id='main_logo'></div>
            < NavRender />
        </header>
    )
}

export default HeaderRender;
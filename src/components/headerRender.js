import React from "react";
import anime from "animejs";
import NavRender from './navRender';
import Logo from "./logo";

function HeaderRender() {

    return (
        <header>
            < Logo />
            < NavRender />
        </header>
    )
}

export default HeaderRender;
import React, {useState} from "react";
import { Route, NavLink, HashRouter } from "react-router";
import ContentRender from "./contentRender";
import HeaderRender from "./headerRender";
import TestButtons from "./testButtons";
import TextBoxRender from "./textBoxRender";

function PageRender () {

    // Locks out button while animation plays
    // Feed in the ID for the button, the time for the animation to play, and the function to run in the meantime!
    
    const buttonLockout = (id, lockTime, func) => {
        document.getElementById(id).disabled = true;
        ()=>func;
        setTimeout(() => {
            document.getElementById(id).disabled = false;
        }, lockTime);
    }

    const [textBoxActive, textBoxActivate] = useState(false);

    return(
        <>
        < HeaderRender />
        <main>
            < ContentRender url_slug='this-is-some-test-text' />
        </main>
        < TestButtons lockout={buttonLockout} boxActivate={textBoxActivate} textBoxActive={textBoxActive} />
        < TextBoxRender boxActive={textBoxActive}/>
        </>
    )
}

export default PageRender;
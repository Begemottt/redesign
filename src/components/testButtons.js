import React from "react";
import anime from "animejs";

function TestButtons (data) {
    const testFunction1 = () => {
        let el = document.getElementsByTagName('pre');
        anime({
            targets: el,
            // rotateY: '180deg',
            rotateX: '180deg',
            // rotateZ: '180deg',
            direction: 'alternate',
            duration: 1000,
            easing: 'linear'
        })
    }
    const testFunction2 = () => {
        let firstP = document.getElementsByTagName('p')[0];
        anime({
            targets: firstP,
            backgroundColor: '#eee',
            color: '#222',
            direction: 'alternate',
            duration: 500,
            easing: 'linear'
        })
    }
    const testFunction3 = () => {
        window.history.pushState('You are now in button three zone!!', 'Button Three Zone!!', '/button-three-zone');
        console.log(window.location.pathname);
    }

    // Activates or deactivates test button box
    const moveButtons = () => {
        let el = document.getElementById('test_buttons');
        el.classList.toggle('active');
    }

    const buttonLockout = data.lockout;

    return(
        <div id="test_buttons">
            <button id="test1" onClick={()=>buttonLockout('test1', 2000, testFunction1())}>Test 1</button>
            <button id="test2" onClick={()=>buttonLockout('test2', 1000, testFunction2())}>Test 2</button>
            <button id="test3" onClick={()=>testFunction3()}>Test 3</button>
            <button id="test_activate" onClick={()=>buttonLockout('test_activate', 500, moveButtons())}>&gt;</button>
        </div>
    )
}

export default TestButtons;
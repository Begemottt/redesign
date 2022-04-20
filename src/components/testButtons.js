import React from "react";
import anime from "animejs";

function TestButtons (data) {

    const turnBackground = () => {
        if (data.textBoxActive === false){
            data.boxActivate(true);
            setTimeout(() => {
                let backPanels = document.getElementsByClassName('background_panel');
                let lineOne = document.getElementById('line1');
                let lineTwo = document.getElementById('line2');
                anime({
                    targets: backPanels,
                    keyframes: [
                        {rotateX: 90, duration: 0},
                        {rotateX: 0}
                    ],
                    easing: 'easeOutSine',
                    duration: 500,
                    delay: anime.stagger(200, {grid: [12, 4], from: 'center' }),
                    complete: () => {
                        console.log(data.textBoxActive);
                    }})
                anime({
                    targets: lineOne,
                    keyframes: [
                        {opacity: 0, translateY: 10, duration: 0},
                        {opacity: 1, translateY: 0, duration: 300, delay: 1200}
                    ],
                    easing: 'easeInQuad'
                })
                anime({
                    targets: lineTwo,
                    keyframes: [
                        {opacity: 0, translateY: 10, duration: 0},
                        {opacity: 1, translateY: 0, duration: 300, delay: 1400}
                    ],
                    easing: 'easeInQuad'
                })
            }, 1);
        } else {
            let backPanels = document.getElementsByClassName('background_panel');
            anime({
                targets: backPanels,
                rotateX: 90,
                easing: 'easeOutSine',
                duration: 500,
                delay: anime.stagger(200, {grid: [12, 4], from: 'center' }),
                complete: () => {
                    data.boxActivate(false);
                }
            })
        }
    }



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
        turnBackground();
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
            <button id="test3" onClick={()=>buttonLockout('test3', 1000, testFunction3())}>Test 3</button>
            <button id="test_activate" onClick={()=>buttonLockout('test_activate', 500, moveButtons())}>&gt;</button>
        </div>
    )
}

export default TestButtons;
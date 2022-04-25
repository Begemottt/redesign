import React from "react";
import anime from "animejs";

function TestButtons (data) {

    const activateLine = (el, delayTime, direction, completeFunction) => {
        anime({
            targets: el,
            keyframes: [
                {opacity: 0, translateY: -5, scaleY: 1.5, duration: 0},
                {opacity: 1, translateY: 0, scaleY: 1.5, duration: 300, delay: delayTime}
            ],
            direction: direction,
            easing: 'easeInQuad',
            complete: function(anim){completeFunction}
        })
    }

    const activateBackground = (el, completeFunction) => {
        anime({
            targets: el,
            keyframes: [
                {rotateY: 90, duration: 0},
                {rotateY: 0}
            ],
            easing: 'easeInSine',
            duration: 250,
            delay: anime.stagger(50, {grid: [10, 10], from: 0 }),
            complete: function(anim){completeFunction}
        })
    }

    const deactivateBackground = (el) => {
        anime({
            targets: el,
            rotateY: 90,
            easing: 'easeOutSine',
            duration: 250,
            delay: anime.stagger(50, {grid: [10, 10], from: 99 }),
            complete: function(anim){data.boxActivate(false);}
        })
    }

    const turnBackground = () => {
        if (data.textBoxActive === false){
            data.boxActivate(true);
            setTimeout(() => {
                let backPanels = document.getElementsByClassName('back_panel');
                let lineOne = document.getElementById('line1');
                let lineTwo = document.getElementById('line2');
                activateBackground(backPanels, activateLine(lineOne, 200, 'normal', activateLine(lineTwo, 400, 'normal')));
            }, 1);
        } else {
            let backPanels = document.getElementsByClassName('back_panel');
            let lineOne = document.getElementById('line1');
            let lineTwo = document.getElementById('line2');
            activateLine(lineTwo, 0, 'reverse', activateLine(lineOne, 200, 'reverse', deactivateBackground(backPanels)));
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
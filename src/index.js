import '../scss/styles.scss';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import anime from 'animejs';

// * [ Test Buttons ]
// First, set up some event listeners
document.getElementById('test1').addEventListener('click', ()=>testFunction1());
document.getElementById('test2').addEventListener('click', ()=>buttonLockout('test2', 1000, testFunction2()));
document.getElementById('test3').addEventListener('click', ()=>testFunction3());
document.getElementById('test_activate').addEventListener('click', ()=>buttonLockout('test_activate', 500, moveButtons()));

// Then, write some functions for testing
function testFunction1(){
    console.log('Button 1 Pressed!!');
}
function testFunction2(){
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
function testFunction3(){
    console.log('Button 3 Pressed!!');
}

// Activates or deactivates test button box
function moveButtons(){
    let el = document.getElementById('test_buttons');
    el.classList.toggle('active');
}

// Locks out button while animation plays
// Feed in the ID for the button, the time for the animation to play, and the function to run in the meantime!
function buttonLockout (id, lockTime, func){
    document.getElementById(id).disabled = true;
    ()=>func;
    setTimeout(() => {
        document.getElementById(id).disabled = false;
    }, lockTime);
}
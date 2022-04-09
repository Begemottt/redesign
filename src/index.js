import '../scss/styles.scss';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import anime from 'animejs';

// * [ Test Buttons ]
// First, set up some event listeners
document.getElementById('test1').addEventListener('click', ()=>testFunction1());
document.getElementById('test2').addEventListener('click', ()=>testFunction2());
document.getElementById('test3').addEventListener('click', ()=>testFunction3());

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
        duration: 1000,
        easing: 'easeInQuad'
    })
}
function testFunction3(){
    console.log('Button 3 Pressed!!');
}
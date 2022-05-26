import React, { useEffect } from 'react';
import anime from 'animejs';

function Logo (data) {

    useEffect(()=>{
        document.addEventListener('scroll', ()=>logoShrink())
    }, []
    );

    const logoShrink = () => {
        let logo = document.getElementById('main_logo');
        if (!logo.classList.contains('small') && window.scrollY > 100){
            logo.classList.add('small');
        } else if (window.scrollY <= 100) {
            logo.classList.remove('small');
        }
    }

    const logoSpin = () => {
        let letters = document.getElementsByClassName('big_letter');
        anime({
            targets: letters,
            keyframes: [
                {rotateY: 0, fill: '#732412', duration: 0},
                {rotateY: '1turn', fill: '#BFBCBA'}
            ],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: anime.stagger(200)
        });
    }
    const logoUnSpin = () => {
        let letters = document.getElementsByClassName('big_letter');
        anime({
            targets: letters,
            keyframes: [
                {rotateY: '1turn', fill: '#BFBCBA', duration: 0},
                {rotateY: 0, fill: '#732412'}
            ],
            duration: 1000,
            direction: 'forward',
            easing: 'easeOutQuad',
            delay: anime.stagger(200)
        });
    }

    return(
        <div id='main_logo' onMouseEnter={()=>logoSpin()} onMouseLeave={()=>logoUnSpin()}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" xmlSpace="preserve">
            <rect className="back" width="200" height="200"/>
            <path className="big_letter" id="logo_r" d="M52,76V60h-8v-8H28v24h-8V20h32v8h8v16h-8V28H28v16h24v16h8v16H52z"/>
            <path className="big_letter" id="logo_t" d="M156,76V28h-16v-8h40v8h-16v48H156z"/>
            <path className="big_letter" id="logo_v" d="M44,164v-24h8v-16h8v16h-8v24h-4v4h-4v12h-8v-16h-8v-24h-8v-16h8v16h8v24H44z"/>
            <path className="big_letter" id="logo_g" d="M148,180v-8h-8v-40h8v-8h24v8h8v8h-8v-8h-24v40h24v-16h-12v-8h20v24h-8v8H148z"/>
            <rect x="90.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 200 1.421085e-14)" width="19" height="200"/>
            <rect x="90.7" y="-0.3" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 200.3874 199.4865)" width="19" height="200"/>
            <path className="letter" d="M54,103.7V101h-1.3v-1.3H50v4h-1.3v-9.3H54v1.3h1.3v2.7H54v-2.7h-4v2.7h4v2.7h1.3v2.7H54z"/>
            <path className="letter" d="M58.7,105.7v-1.3h-1.3v-4h1.3V99h4v1.3H64v4h-1.3v1.3H58.7z M62,104.3v-0.7h0.7V101H62v-0.7h-2.7v0.7h-0.7v2.7 h0.7v0.7H62z"/>
            <path className="letter" d="M68.7,103.7v-1.3h-1.3v1.3H66v-9.3h1.3v4h1.3v1.3h-1.3v1.3h1.3v1.3h2v-0.7h0.7V99h-0.7v-0.7h-2V97h2.7v1.3h1.3 v4h-1.3v1.3H68.7z"/>
            <path className="letter" d="M74.7,99v-1.3H76V99H74.7z M74.7,105.7v-5.3H76v5.3H74.7z"/>
            <path className="letter" d="M82,103.7v-5.3h-1.3v1.3h-1.3v4H78V97h1.3v1.3h1.3V97H82v1.3h1.3v5.3H82z"/>
            <path className="letter" d="M92.7,103v-4H94v-2.7h1.3V99H94v4h-0.7v0.7h-0.7v2h-1.3V103H90v-4h-1.3v-2.7H90V99h1.3v4H92.7z"/>
            <path className="letter" d="M102.7,103.7v-1.3h-1.3v-4h-2V99h-0.7v2.7h0.7v0.7h2v1.3h-2.7v-1.3h-1.3v-4h1.3V97h4v5.3h1.3v1.3H102.7z"/>
            <path className="letter" d="M110,105.7v-5.3h-1.3v1.3h-1.3v4H106V99h1.3v1.3h1.3V99h1.3v1.3h1.3v5.3H110z"/>
            <path className="letter" d="M114.7,103.7v-1.3h-1.3v-6.7h1.3v-1.3h4v1.3h1.3V97h-1.3v-1.3h-4v6.7h4v-2.7h-2v-1.3h3.3v4h-1.3v1.3H114.7z"/>
            <path className="letter" d="M122,99v-1.3h1.3V99H122z M122,105.7v-5.3h1.3v5.3H122z"/>
            <path className="letter" d="M125.3,103.7v-9.3h1.3v9.3H125.3z"/>
            <path className="letter" d="M130,105.7v-1.3h-1.3v-4h1.3V99h2.7v1.3h1.3v-4h1.3v9.3H134v-1.3h-1.3V103h1.3v-1.3h-1.3v-1.3h-2v0.7H130v2.7 h0.7v0.7h2v1.3H130z"/>
            <path className="letter" d="M138.7,103.7v-1.3h-1.3v-4h1.3V97h4v1.3h1.3v2.7h-5.3v1.3h5.3v1.3H138.7z M142.7,99.7V99H142v-0.7h-2.7V99h-0.7 v0.7H142.7z"/>
            <path className="letter" d="M146,105.7V99h1.3v1.3h1.3V99h2.7v1.3h-2.7v1.3h-1.3v4H146z"/>
            </svg>
        </div>
    )
}

export default Logo;
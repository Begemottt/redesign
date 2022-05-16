import anime from "animejs";

// These functions let you turn on an arbitrarily sized grid with a fancy animation.
export function grid_activate(x, y, corner, el, compFunc){
    let fromNum = 0;
    switch(corner){
        case 'upper_left':
            fromNum = 0;
            break;
        case 'upper_right':
            fromNum = x - 1;
            break;
        case 'lower_left':
            fromNum = (x * y) - x - 1;
            break;
        case 'lower_right':
            fromNum = (x * y) - 1;
            break;
    }
    anime({
        targets: el,
        keyframes: [
            {rotateY: 90, rotateX: 90, duration: 0},
            {rotateY: 0, rotateX: 0}
        ],
        direction: 'forward',
        easing: 'easeInQuad',
        duration: 200,
        delay: anime.stagger(50, {grid: [x, y], from: fromNum }),
        complete: function(anim){compFunc}
    })
}

export function grid_deactivate(x, y, corner, el, compFunc){
    let fromNum = 0;
    switch(corner){
        case 'upper_left':
            fromNum = 0;
            break;
        case 'upper_right':
            fromNum = x - 1;
            break;
        case 'lower_left':
            fromNum = (x * y) - x - 1;
            break;
        case 'lower_right':
            fromNum = (x * y) - 1;
            break;
    }
    anime({
        targets: el,
        keyframes: [
            {rotateY: 0, rotateX: 0, duration: 0},
            {rotateY: -90, rotateX: -90}
        ],
        direction: 'forward',
        easing: 'easeOutQuad',
        duration: 200,
        delay: anime.stagger(50, {grid: [x, y], from: fromNum }),
        complete: function(anim){compFunc(false)}
    })
}

export const activateTopNav = (topNavActive, topNavActivate) => {
    let button = document.getElementById('top_nav_activate');
    let nav = document.getElementById('top_nav');

    if(!topNavActive){
        button.classList.toggle('active');
        topNavActivate(true);
        let nav_buttons = document.getElementsByClassName('top_nav_button');
        button.blur();
        anime({
            targets: nav_buttons,
            keyframes: [
                {rotateX: -180, rotate: 0, duration: 0},
                {rotateX: 0, rotate: 5}
            ],
            duration: 1000,
            easing: 'easeOutQuad',
            direction: 'forward',
            delay: anime.stagger(100)
        })
    } else {
        let nav_buttons = document.getElementsByClassName('top_nav_button');
        button.classList.toggle('active');
        button.blur();
        topNavActivate(false);
        anime({
            targets: nav_buttons,
            keyframes: [
                {rotateX: 0, rotate: 5, duration: 0},
                {rotateX: -180, rotate: 0}
            ],
            duration: 1000,
            easing: 'easeOutQuad',
            direction: 'forward',
            delay: anime.stagger(100),
        })
    }
}
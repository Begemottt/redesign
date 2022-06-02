import anime from "animejs";

// * [ Utility Functions ]
export const animate = (el) => {
    el.classList.add('animating');
}
export const deAnimate = (el) => {
    el.classList.remove('animating');
}

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

// * [ Animations for the top navigation menu ]
// [ Main menu ]
export const showTopNavAnim = () => {
    let mainMenu = document.getElementById('top_nav_main');
    // Check to see if the animation is currently firing, and if so, do NOT start it again!
    if (mainMenu.classList.contains('animating') === false) {
        animate(mainMenu);
        // Main menu
        anime({
            targets: mainMenu,
            keyframes: [
                {height: 0, duration: 0},
                {height: 50}
            ],
            direction: 'forward',
            duration: 1000,
            easing: 'easeOutElastic(1, .6)',
            complete: function(anim){
                deAnimate(mainMenu)
            }
        });
        // Buttons within the main menu
        anime({
            targets:'#top_nav_main li',
            keyframes: [
                {rotateX: 90, duration: 0},
                {rotateX: 0}
            ],
            direction: 'forwards',
            easing: 'easeInElastic(5, 2)',
            duration: 1000,
            delay: anime.stagger(100, {start: 200})
        });
        // Container for the WHOLE top nav
        anime({
            targets: '#top_nav',
            keyframes: [
                {width: '25%', duration: 0},
                {width: '95%'}
            ],
            direction: 'forward',
            easing: 'easeInQuad',
            duration: 300
        })
    }
}
export const hideTopNavAnim = () => {
    let mainMenu = document.getElementById('top_nav_main');
    // Check to see if the animation is currently firing, and if so, do NOT start it again!
    if(mainMenu.classList.contains('animating') === false){
        animate(mainMenu);
        // Main menu
        anime({
            targets: '#top_nav_main',
            keyframes: [
                {height: 50, duration: 0},
                {height: 0}
            ],
            direction: 'forward',
            duration: 500,
            easing: 'easeInQuad',
            delay: 200,
            complete: function(anim){deAnimate(mainMenu)}
        });
        // Buttons within the main menu
        anime({
            targets:'#top_nav_main li',
            keyframes: [
                {rotateX: 0, duration: 0},
                {rotateX: 90}
            ],
            direction: 'forwards',
            easing: 'easeInQuad',
            duration: 600,
            delay: anime.stagger(100)
        });
        // Container for the WHOLE top nav box
        anime({
            targets: '#top_nav',
            keyframes: [
                {width: '95%', duration: 0},
                {width: '25%'}
            ],
            direction: 'forward',
            easing: 'easeInQuad',
            duration: 300,
            delay: 500
        })
    }
}

// [ Submenus ]
export const showSubMenuAnim = () => {
    anime({
        targets: '#top_nav_sub',
        keyframes: [
            {height: 0, duration: 0},
            {height: 200}
        ],
        direction: 'forward',
        duration: 1000,
        easing: 'easeOutElastic(1, .6)'
    });
}
export const hideSubMenuAnim = () => {
    anime({
        targets: '#top_nav_sub',
        keyframes: [
            {height: 200, duration: 0},
            {height: 0}
        ],
        direction: 'forward',
        duration: 500,
        easing: 'easeOutQuad'
    });
}
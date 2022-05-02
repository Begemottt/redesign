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
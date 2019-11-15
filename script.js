'use strict';

/*MOUSEOVER EFFECT*/

let top_btn = document.querySelector('#back_to_top');
top_btn.addEventListener('mouseenter', mouseEnter(top_btn));

function mouseEnter(event) {
    event.style.cursor = 'pointer';
}

/*SCROLL BUTTON*/

function scrollToTop() {
    window.scrollTo(0,0);
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
        top_btn.style.height = '60px';
        top_btn.style.width = '60px';
        top_btn.style.border = '4px solid tomato';
        top_btn.style.fontSize = "30pt";
    } else {
        top_btn.style.height = '0px';
        top_btn.style.width = '0px';
        top_btn.style.border = 'none';
        top_btn.style.fontSize = "0pt";
    }
});

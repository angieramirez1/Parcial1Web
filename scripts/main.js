"use strict";
const htmltag = document.querySelector('html');
const bodyTag = document.querySelector('body');


let scrolledVertical = () => {
    let h = scrollY  / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(h * 100);
}
let scrolledHorizontal = () => {
    let w = scrollX  / (bodyTag.scrollWidth - innerWidth);
    return Math.floor(w * 100);
}

addEventListener('scroll', () => {
    bodyTag.style.setProperty('background', scrolledVertical() > 50 ? "var(--color2)" : "var(--color1)");
}

)
addEventListener('scroll', () => {
    bodyTag.style.setProperty('background', scrolledHorizontal() > 50 ? "var(--color3)" : "var(--color1)");
})



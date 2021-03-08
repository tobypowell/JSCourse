const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let countdown = 100;

let int = setInterval(blurring, 30)

function blurring() {
    load ++
    countdown --;

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = countdown / 100;

    bg.style.filter= `blur(${countdown}px)`;
}

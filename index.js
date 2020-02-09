import { TweenMax } from 'gsap';

TweenMax.set('#box', { xPercent: -50, yPercent: -50 });

document.addEventListener('click', e => {
    const { clientX, clientY } = e;
    TweenMax.to('#box', 1, { x: clientX, y: clientY })
})


import { TweenMax, TimelineMax } from 'gsap';

TweenMax.set('#box', {
    width: '50px',
    height: '50px',
    x: '50px',
    y: '50px'
});

// document.addEventListener('mousemove', e => {
//     const { clientX, clientY } = e;
//     TweenMax.to('#box', 0.6, {
//         x: clientX,
//         y: clientY,
//         rotation: "+=30"
//     })
// })

const timeline = new TimelineMax({ repeat: -1 })

timeline.pause()

timeline.to('#box', .5, { x: 100 })
timeline.to('#box', .5, { y: 100 })
timeline.to('#box', .5, { x: 50 })
timeline.to('#box', .5, { y: 50 })

document.querySelector('#box').addEventListener('click', () => {
    if (timeline.isActive()) {
        timeline.pause()
    } else {
        timeline.resume()
    }
})


const cart = document.querySelector(".buy")
const back = document.querySelector(".back-button")

let t1 = gsap.timeline({paused: true, reversed: true})
let t2 = gsap.timeline({paused: true, reversed: true})

cart.addEventListener("click", (e)=>{
   t2.play() 
})

back.addEventListener("click", (e)=> {
  t2.reverse()  
})

t1.play()

t1.to(
    ".car-1", {
        ease: "elastic.out(1, 0.5)",
        top: "5%",
        duration: 1.5
    }
);

t1.to(
    ".container h1", {
        ease: "elastic.out(1, 0.5)",
        bottom: "32%",
        duration: 1.5
    },
    0.2
)

t1.to(
    ".container p", {
        ease: "elastic.out(1, 0.5)",
        bottom: "18%",
        duration: 1.5
    },
    0.3
)

t1.from(
    ".buy",{
        ease: "elastic.out(1, 0.5)",
        scale:0,
    },
    0.4
)

t2.to(".car-1",{
    ease: "elastic.out(.5, 0.5)",
    top: "-80%",
    duration: 1.5,
}, 0)

t2.to(".container h1",{
    ease: "elastic.out(.5, 0.5)",
    bottom: "-30%",
}, 0)

t2.to(".container p",{
    ease: "elastic.out(.5, 0.5)",
    bottom: "-30%",
}, 0)

t2.to(".buy i", {
    ease: "power1.inOut",
    scale:0,
    duration:0.3
}, 0)

t2.to(".buy",{
    ease: "power1.inOut",
    scaleY: 10,
    width: 378,
    borderRadius: 0,
    duration: 0.3
}, 0.3)

t2.to(".back-button",{
    ease: "power1.inOut",
    left: "5%",
    duration: 1.5
}, 0.5)

t2.to(".car-2",{
    ease: "elastic.out(1, 0.8)",
    left:"50%",
    duration: 1.5
}, 0.3)

t2.to(".container h2",{
    ease: "elastic.out(1, 0.8)",
    left:"60%",
    duration: 1.5
}, 0.4)

t2.to(".container .summary",{
    ease: "elastic.out(1, 0.8)",
    left:"52%",
    duration: 1.5
}, 0.5)




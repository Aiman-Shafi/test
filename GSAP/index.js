const tl = gsap.timeline({
    default: {
        duration: .75,
        ease: "power3.in"
    }
})

tl.fromTo(".hero-img", {
    scale: 1.4,
    borderRadius: "0rem"
}, {
    scale: 1,
    borderRadius: "2rem",
    duration: 2.5,
    delay:.5,
    ease: "elastic.out(1.5, 1)"
})

tl.fromTo(".text1", {x:"100%", opacity:.5 }, {x:0, opacity:1}, "<30%")
tl.fromTo(".text2", {y:"100%", opacity:.5 }, {y:0, opacity:1}, "<30%")
tl.fromTo(".text3", {x:"-100%", opacity:.5 }, {x:0, opacity:1}, "<30%")
tl.fromTo(".text4", {x:"100%", opacity:.5 }, {x:0, opacity:1}, "<30%")
tl.fromTo(".text5", {y:"100%", opacity:.5 }, {y:0, opacity:1}, "<30%")
tl.fromTo(".text6", {x:"-100%", opacity:.5 }, {x:0, opacity:1}, "<30%")
tl.fromTo(".btn", {y:20, borderRadius: "0rem", opacity:0}, {borderRadius:".2rem", opacity:1, y:0}, "<")

const logo = document.querySelector(".logo")
const letter = logo.textContent.split("")
console.log(letter)
logo.textContent = "";

letter.forEach((letter)=> {
    logo.innerHTML += `<span class="letter">${letter}</span>`
})

gsap.set(".letter", {display: "inline-block"})
gsap.fromTo(".letter", {y:"-100%"}, {y:0, delay:2, stagger:.05, ease:"back.out"})
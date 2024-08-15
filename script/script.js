var typed = new Typed (".auto-type", {
    strings: ["Bijak", "Mandiri"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
})

let slides = document.querySelectorAll('.slide-wrapper');
let i = 0;

function next() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function prev() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

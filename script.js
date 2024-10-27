const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const buttons = document.querySelectorAll(".button");

let current = 0;
const totalSlides = slides.length;

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        index === 0 ? gotoNext() : gotoPrev();
    });
});

const gotoPrev = () => {
    current = (current - 1 + totalSlides) % totalSlides;
    updateSlides();
};

const gotoNext = () => {
    current = (current + 1) % totalSlides;
    updateSlides();
};

const updateSlides = () => {
    slides.forEach(slide => {
        slide.classList.remove("active", "prev1", "prev2", "next1", "next2");
    });

    slides[current].classList.add("active");

    slides[(current - 1 + totalSlides) % totalSlides].classList.add("prev1");
    slides[(current - 2 + totalSlides) % totalSlides].classList.add("prev2");

    slides[(current + 1) % totalSlides].classList.add("next1");
    slides[(current + 2) % totalSlides].classList.add("next2");
};

updateSlides();
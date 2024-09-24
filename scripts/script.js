// animaties inbeeld
const ptjes = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const h2tjes = document.querySelectorAll("h2");
const h3tjes = document.querySelectorAll("h3");
const h4tjes = document.querySelectorAll("h4");
const h5tjes = document.querySelectorAll("h5");
const h6tjes = document.querySelectorAll("h6");
const figuretjes = document.querySelectorAll("figure");

// leest alleen de content
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;

    if(intersecting){
       entry.target.classList.add("inbeeld");
                                  // is een class
       }
  });
});

ptjes.forEach((ptje) => {
  observer.observe(ptje);
});

h1.forEach((h1tje) => {
  observer.observe(h1tje);
});

h2tjes.forEach((h2tje) => {
  observer.observe(h2tje);
});

h3tjes.forEach((h3tje) => {
  observer.observe(h3tje);
});

h4tjes.forEach((h4tje) => {
  observer.observe(h4tje);
});

h5tjes.forEach((h5tje) => {
  observer.observe(h5tje);
});

h6tjes.forEach((h6tje) => {
  observer.observe(h6tje);
});

figuretjes.forEach((figuretje) => {
  observer.observe(figuretje);
});

// nienke heeft me geholpen 
// https://blog.webdevsimplified.com/2022-01/intersection-observer/







// Slideshow pagina 2
let slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {
    showDivs(slideIndex1 += n);
}

function showDivs(n) {
    const slides = document.getElementsByClassName("slideShow");
    if (n > slides.length) { slideIndex1 = 1; }
    if (n < 1) { slideIndex1 = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
}
// van w3 Schools https://www.w3schools.com/w3css/w3css_slideshow.asp








// dialog zelf

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#openDialogButton");
const closeButton = document.querySelector("#closeDialogButton");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});



// bron https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog




// slideshow dialog
let slideIndex2 = 1;
showSlides(slideIndex2);

function plusSlides(n) {
    showSlides(slideIndex2 += n);
}

function currentSlide(n) {
    showSlides(slideIndex2 = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slideShowFigure");
    const dots = document.querySelectorAll(".dots span");

    if (n > slides.length) { slideIndex2 = 1; }
    if (n < 1) { slideIndex2 = slides.length; }
    slides.forEach((slide) => slide.style.display = "none");
    dots.forEach((dot) => dot.className = dot.className.replace(" active", ""));
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}

// bron chatGPT

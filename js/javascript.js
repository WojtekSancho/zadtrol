let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slider img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
}

function prevSlide() {
    slideIndex -= 1;
    showSlides();
}

function nextSlide() {
    slideIndex += 1;
    showSlides();
}
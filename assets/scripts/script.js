var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Gallery");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove "active" class from all dots
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});
document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

showSlides(slideIndex);

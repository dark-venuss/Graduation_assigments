let slideIndex = 0;
let slides = document.querySelectorAll(".swiper-slide");
let dots = document.querySelectorAll(".tacka");

function showSlide(index){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "silver";
    }
    slides[index].style.display = "flex";
    dots[index].style.backgroundColor = "green";
} 

function autoSlider(){
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

showSlide(slideIndex);
setInterval(autoSlider, 3000);
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", function(){
        slideIndex = i;
        showSlide(slideIndex);
    });
}
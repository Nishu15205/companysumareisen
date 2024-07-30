let slideIndex = 1;
showSlides(slideIndex);

function prev(n) {
  showSlides(slideIndex += n);
}

function next(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("animate");
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
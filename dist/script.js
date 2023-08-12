let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
     top: 0,
     behavior: 'smooth'
  });
}

// Show/hide the floating button based on scroll position
window.addEventListener('scroll', function() {
  var button = document.getElementById('floating-button');
  if (window.scrollY > 300) {
     button.style.display = 'block';
  } else {
     button.style.display = 'none';
  }
});

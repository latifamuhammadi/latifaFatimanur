// Function to toggle the side menu

function toggleMenu() {
    var sideMenu = document.getElementById("sideMenu");
    var body = document.body;
    
    // Toggle the 'open' class for the side menu
    sideMenu.classList.toggle("open");
    
    // Toggle the 'menu-open' class for the body to adjust padding
    body.classList.toggle("menu-open");
  }
//drpdown
function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdown = event.target.nextElementSibling;
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    } else {
      dropdown.classList.add('show');
    }
  }
// slideshow
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides');

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Increment slide index
    slideIndex++;

    // Reset index if it exceeds the total number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Automatically switch to the next slide after 3 seconds
    setTimeout(showSlides, 5000);
}

// Start the slideshow
showSlides();
/* detail*/
const carousel = document.querySelector('.carousel');
let isDragging = false, startPos = 0, currentTranslate = 0, prevTranslate = 0;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPos = e.pageX;
  carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentPosition = e.pageX;
  currentTranslate = prevTranslate + currentPosition - startPos;
  carousel.style.transform = `translateX(${currentTranslate}px)`;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  carousel.style.cursor = 'grab';
});



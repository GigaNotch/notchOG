const navItems = document.querySelectorAll('.nav-item');
const slider = document.querySelector('.slider');

// Function to move the slider to the targeted element
function updateSlider(element) {
  // Get the width and left-offset of the clicked item
  const width = element.offsetWidth;
  const left = element.offsetLeft;

  // Apply those values to the slider element to animate it
  slider.style.width = `${width}px`;
  slider.style.left = `${left}px`;
}

// Initialize the slider's position on page load
window.addEventListener('load', () => {
  const activeItem = document.querySelector('.nav-item.active');
  if (activeItem) {
    updateSlider(activeItem);
  }
});

// Add click events to all nav items
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    // e.preventDefault(); // Prevents the page from jumping when clicking '#'

    // Remove the 'active' class from all items
    navItems.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to the one just clicked
    this.classList.add('active');

    // Move the slider
    updateSlider(this);
  });
});
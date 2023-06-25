// Function to trigger the animation
function animateFooter() {
  const footerCols = document.querySelectorAll('.footer-col');
const headings = document.querySelectorAll('.footer-col h1, .footer-col h4');




  footerCols.forEach(function (col) {
    col.style.opacity = '0'; // Set initial opacity to 0
    col.style.transform = 'translateY(100px)'; // Move the element down by 100px
    col.style.transition = 'opacity 1s ease, transform 1s ease'; // Apply transition effect

    setTimeout(function () {
      col.style.opacity = '1'; // Fade in the element
      col.style.transform = 'translateY(0)'; // Move the element to its original position
    }, 200); // Delay the animation by 200 milliseconds
  });
  headings.forEach(function (heading) {
      heading.style.opacity = '0'; // Set initial opacity to 0
      heading.style.transform = 'translateY(100px)'; // Move the element down by 100px
      heading.style.transition = 'opacity 1s ease, transform 1s ease'; // Apply transition effect

      setTimeout(function () {
        heading.style.opacity = '1'; // Fade in the element
        heading.style.transform = 'translateY(0)'; // Move the element to its original position
      }, 200); // Delay the animation by 200 milliseconds
    });


}

// Trigger the animation when the page is loaded
window.addEventListener('load', animateFooter);

const burgerMenu = document.querySelector('.burger-menu');
const navbarLinks = document.querySelector('.navbar-links');

burgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

const enlargeLinks = document.querySelectorAll('.enlarge');

enlargeLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // prevent the default behavior of the link
    const imgSrc = link.getAttribute('href'); // get the href attribute of the link
    // ...
    const enlargeLinks = document.querySelectorAll('.enlarge');
  const body = document.querySelector('body');

  enlargeLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // prevent the default behavior of the link
      const imgSrc = link.getAttribute('href'); // get the href attribute of the link
      const img = document.createElement('img'); // create a new img element
      img.setAttribute('src', imgSrc); // set the src attribute of the img element
      img.setAttribute('alt', link.getAttribute('alt')); // set the alt attribute of the img element
      img.classList.add('enlarged'); // add a class to the img element
      body.appendChild(img); // append the img element to the body
    });
  });
  });
});



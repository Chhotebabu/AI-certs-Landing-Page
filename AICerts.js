
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('expanded');
}


function validateEmail() {
  const emailInput = document.querySelector('.mail-id');
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
      alert('Please enter a valid email address.');
  } else {
      alert('Thank you for subscribing!');
      emailInput.value = ''; 
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const getCertButton = document.querySelector('.get-cert');
  getCertButton.addEventListener('click', function () {
      scrollToSection('contact-section');
  });
});

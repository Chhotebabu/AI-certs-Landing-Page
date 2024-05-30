
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateFooterYear() {
  const footerYear = document.querySelector('.footer-year');
  footerYear.textContent = new Date().getFullYear();
}

function displayImageModal(event) {
  const modal = document.querySelector('.image-modal');
  const modalImg = document.querySelector('.image-modal-content');
  const captionText = document.querySelector('.image-modal-caption');

  modal.style.display = 'block';
  modalImg.src = event.target.src;
  captionText.textContent = event.target.alt;
}

function closeImageModal() {
  const modal = document.querySelector('.image-modal');
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const getCertButton = document.querySelector('.get-cert');
  getCertButton.addEventListener('click', function () {
      scrollToSection('contact-section');
  });

  const backToTopButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', scrollToTop);

  updateFooterYear();

  const images = document.querySelectorAll('.why-ai-img img, .prof-cert-container img, .tech-cert-container img');
  images.forEach(img => {
      img.addEventListener('click', displayImageModal);
  });

  const modalCloseButton = document.querySelector('.image-modal-close');
  modalCloseButton.addEventListener('click', closeImageModal);

  window.addEventListener('click', function (event) {
      const modal = document.querySelector('.image-modal');
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});

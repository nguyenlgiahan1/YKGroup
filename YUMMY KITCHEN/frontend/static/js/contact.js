document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    const newsletterForm = document.querySelector('.newsletter-form'); 
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        if (!isValidEmail(email)) {
          alert('Please enter a valid email address');
          return;
        }
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    }
    if (newsletterForm) {
      const subscribeBtn = newsletterForm.querySelector('.subscribe-btn');
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      subscribeBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        
        if (!email) {
          alert('Please enter your email address');
          return;
        }
        
        if (!isValidEmail(email)) {
          alert('Please enter a valid email address');
          return;
        }
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      });
    }
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
      });
      card.addEventListener('click', function() {
        const recipeName = this.querySelector('h3').textContent;
        alert('You selected: ' + recipeName);
      });
    });
  });
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
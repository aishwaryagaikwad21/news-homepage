

 document.addEventListener('DOMContentLoaded', () => {
    const navIcon = document.getElementById('nav_icon');
    const navLinks = document.getElementById('nav-links');

    navIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  })

 
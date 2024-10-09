/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById('myNavMenu');
  if (menuBtn.className === 'nav-menu') {
    menuBtn.className += ' responsive';
  } else {
    menuBtn.className = 'nav-menu';
  }
}
document.getElementById('aboutMeBtn').addEventListener('click', function () {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById('header');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
    navHeader.style.height = '70px';
    navHeader.style.lineHeight = '70px';
  } else {
    navHeader.style.boxShadow = 'none';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';
  }
}
// Get the toggle switch
const themeToggleCheckbox = document.getElementById('theme-toggle');

// Set default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  themeToggleCheckbox.checked = true; // Set the switch to checked
} else {
  // Ensure the body is in dark mode
  document.body.classList.remove('light-mode');
  themeToggleCheckbox.checked = false; // Set the switch to unchecked
}

// Add event listener to the toggle switch
themeToggleCheckbox.addEventListener('change', function () {
  document.body.classList.toggle('light-mode', this.checked);

  if (this.checked) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const srBounce = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
  beforeReveal: function (el) {
    el.classList.add('bounce');  // Add bounce animation on reveal
  },
  afterReset: function (el) {
    el.classList.remove('bounce');  // Remove bounce animation on reset
  }
});

/* Apply the bounce reveal to the elements */
srBounce.reveal('.featured-text-card');
srBounce.reveal('.featured-name', { delay: 100 });
srBounce.reveal('.featured-text-info', { delay: 200 });
srBounce.reveal('.featured-text-btn', { delay: 200 });
srBounce.reveal('.social_icons', { delay: 200 });
srBounce.reveal('.featured-image', { delay: 300 });

/* -- PROJECT BOX -- */
srBounce.reveal('.project-box', { interval: 200 });/* -- HEADINGS -- */
srBounce.reveal('.certificate-box', { interval: 200 });
srBounce.reveal('.top-header', {});
/* -- ABOUT INFO & CONTACT INFO -- */

srBounce.reveal('.about-info', { interval: 100 });
srBounce.reveal('.contact-info', { delay: 100 });
/* -- ABOUT SKILLS & FORM BOX -- */


srBounce.reveal('.skills-header', { interval: 100 });
srBounce.reveal('.skill-box', { interval: 100 });
srBounce.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

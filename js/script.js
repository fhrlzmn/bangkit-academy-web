const toggleDarkMode = document.querySelector('ul.nav-list input');
const toggleHamburgerMenu = document.querySelector('.hamburger-menu input');

const bangkitLogoElements = document.querySelectorAll('img.bangkit-logo');
const htmlTagElement = document.querySelector('html');
const headerElement = document.querySelector('header');
const ulNavListElement = document.querySelector('ul.nav-list');
const hamburgerBoxElement = document.querySelector('.hamburger-box');

const moonIconElement = document.querySelector('.moon-icon');
const sunIconElement = document.querySelector('.sun-icon');

toggleHamburgerMenu.addEventListener('change', function (e) {
  if (e.target.checked) {
    headerElement.classList.add('active');
    ulNavListElement.classList.add('active');
    hamburgerBoxElement.classList.add('active');
  } else {
    headerElement.classList.remove('active');
    ulNavListElement.classList.remove('active');
    hamburgerBoxElement.classList.remove('active');
  }
});

toggleDarkMode.addEventListener('change', function (e) {
  if (e.target.checked) {
    htmlTagElement.classList.add('dark');
    moonIconElement.classList.add('hidden');
    sunIconElement.classList.remove('hidden');
    changeLogoColor();
  } else {
    htmlTagElement.classList.remove('dark');
    moonIconElement.classList.remove('hidden');
    sunIconElement.classList.add('hidden');
    changeLogoColor();
  }
});

function changeLogoColor() {
  if (htmlTagElement.classList.contains('dark')) {
    for (const element of bangkitLogoElements) {
      element.src = './assets/bangkit-logo-white.webp';
    }
  } else {
    for (const element of bangkitLogoElements) {
      element.src = './assets/bangkit-logo-black.webp';
    }
  }
}

const toggleHamburgerMenu = document.querySelector('.hamburger-menu input');
const headerElement = document.querySelector('header');
const ulNavListElement = document.querySelector('ul.nav-list');
const hamburgerBoxElement = document.querySelector('.hamburger-box');

toggleHamburgerMenu.addEventListener('change', function (e) {
  console.log(e.target.checked);
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

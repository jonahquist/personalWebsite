let mainNav = document.getElementById('js-navbar-list');
let navBarToggle = document.getElementById('js-navbar-toggle');
let card = document.querySelector('.graphic');

card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
})

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
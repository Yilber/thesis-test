var navbar = document.getElementById('navbar-mobile');
var navbarButton = document.getElementById('navbar-btn');

var password = document.getElementById('password');
var toggle = document.getElementById('password-toggle');

navbarButton.addEventListener('click', function() {
  navbar.classList.toggle("open");
});

navbarButton.addEventListener('focusout', function() {
  navbar.classList.remove("open");
});

toggle.addEventListener('click', function() {
  if (password.type === 'text') {
    password.type = 'password';
  } else {
    password.type = 'text';
  }
});

var backgroundImage = new Image();
backgroundImage.src = 'images/background.jpg';

backgroundImage.onload = function() {
  document.body.style.backgroundImage = 'url(images/background.jpg)';
};
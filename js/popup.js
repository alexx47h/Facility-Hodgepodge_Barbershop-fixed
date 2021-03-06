var link = document.querySelector('.login'),
    popup = document.querySelector('.modal-content'),
    close = popup.querySelector('.modal-content-close'),
    form = popup.querySelector('form'),
    login = popup.querySelector('[name=login]'),
    password = popup.querySelector('[name=password]'),
    storage = localStorage.getItem('login'),

    mapOpen = document.querySelector('.js-open-map'),
    mapPopup = document.querySelector('.modal-content-map'),
    mapClose = mapPopup.querySelector('.modal-content-close'),
    overlay = document.querySelector('.modal-overlay');


link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
  overlay.classList.add('modal-overlay-show');
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('modal-overlay-show');
});

form.addEventListener('submit', function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    localStorage.setItem('login', login.value);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27 && popup.classList.contains('modal-content-show')) {
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
    overlay.classList.remove('modal-overlay-show');
  }
});


mapOpen.addEventListener('click', function(event) {
    event.preventDefault();
    mapPopup.classList.add('modal-content-show');
    overlay.classList.add('modal-overlay-show');
});

mapClose.addEventListener('click', function(event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-content-show');
    overlay.classList.remove('modal-overlay-show');
});

window.addEventListener('keydown', function(event) {
  //м.б. &&
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains('modal-content-show')) {
      mapPopup.classList.remove('modal-content-show');
      overlay.classList.remove('modal-overlay-show');
    }
  }
});


overlay.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  popup.classList.remove('modal-error');
  mapPopup.classList.remove('modal-content-show');
  overlay.classList.remove('modal-overlay-show');
});
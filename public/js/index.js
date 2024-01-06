document.addEventListener("DOMContentLoaded", function () {
  var humbarger = document.querySelector('.humbarger');
  var menuList = document.querySelector('.menu-list');
  var menuListItems = document.querySelectorAll('.menu-list li a');

  humbarger.addEventListener('click', function (event) {
    if (menuList.style.display === 'none' || menuList.style.display === '') {
      menuList.style.display = 'block';
    } else {
      menuList.style.display = 'none';
    }
    event.preventDefault();
  });

  menuListItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      if (window.innerWidth < 768) {
        menuList.style.display = 'none';
        event.preventDefault();
      }
    });
  });
});
function redirectTo(url) {
  window.location.href = url;
}
  
function changeBackground1() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}

function changeBackground2() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}
function changeBackground3() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}
function changeBackground4() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}
function submitForm() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name && phone && email && message) {
      alert('Thank you for reaching out! Your message has been received, and we\'ll get back to you as soon as possible. In the meantime, feel free to explore more of our offerings. Have a great day!');
  } else {
      alert('Please fill out all fields before submitting.');
  }
}
function scrollToNextSection() {
    const section = document.getElementById("video");

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
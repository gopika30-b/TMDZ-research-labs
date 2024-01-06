let form = document.getElementById("submitForm");
form.addEventListener("click", function submitForm() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name && phone && email && message) {
    let formData = {
      name: name,
      phone: phone,
      email: email,
      message: message
    };
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contactUs');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
      if (xhr.responseText == 'success') {
        alert('Thank you for reaching out! Your message has been received, and we\'ll get back to you as soon as possible. In the meantime, feel free to explore more of our offerings. Have a great day!');
        document.getElementById('name').value = "";
        document.getElementById('phone').value = '';
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
      } else {
        alert("Something went wrong!");
      }
    }
    xhr.send(JSON.stringify(formData));
  } else {
    alert('Please fill out all fields before submitting.');
  }

});
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




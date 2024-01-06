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
function scrollToNextSection() {
  const section = document.getElementById("internship");

  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}
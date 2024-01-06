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
    const section = document.getElementById("missionVision");

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.getElementById('collaborationBtn').addEventListener('click', function() {
    window.location.href = 'mailto:info@techmedz.in';
});

var swiper = new Swiper(".team-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 4, 
      spaceBetween: 30,
    },
  },
});

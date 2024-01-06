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
  const section = document.getElementById("linkedin");

  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

var faqs = document.getElementsByClassName("faq-page");

for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        for (let j = 0; j < faqs.length; j++) {
            if (faqs[j] !== this) {
                faqs[j].classList.remove("active");
                faqs[j].nextElementSibling.style.display = "none";
            }
        }
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

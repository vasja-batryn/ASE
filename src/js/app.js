import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// for slider at product page
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.splide')) {
    // додав проверку на наявність елемента
    let splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      snap: true,
      arrows: false,
      pagination: false,
      perPage: 4,
      breakpoints: {
        1200: { perPage: 3, gap: '.5rem' },
        640: { perPage: 1, gap: '.2rem' },
      },
    });

    splide.mount();
  }
});

//For navbar scrolling
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px';
    navbar.style.transition = 'all .6s linear';
  } else {
    navbar.style.top = '0px';
    navbar.style.transition = 'all .6s linear';
  }

  lastScrollTop = scrollTop;
});


var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry('.grid', {
  // options
});

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// for slider at product page
document.addEventListener( 'DOMContentLoaded', function() {
    if(document.querySelector('.splide')){ // додав проверку на наявність елемента
      let splide = new Splide( '.splide', {
        type   : 'loop',
        drag   : 'free',
        snap   : true,
        arrows: false,
        pagination: false,
        perPage: 4,
        breakpoints: {
            1200: { perPage: 3, gap: '.5rem' },
            640 : { perPage: 1, gap: '.2rem' },
          }
      } );

      splide.mount();
    }
  } );


var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});

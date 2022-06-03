
document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '.splide', {
      type   : 'loop',
      focus  : 'center',
      perPage: 3,
      perMove: 1,
      gap    : '3em',
      }).mount();
} )
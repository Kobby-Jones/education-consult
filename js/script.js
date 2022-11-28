$(".owl-carousel1").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  nav: true,
  loop: true,
  lazyLoad: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    485: {
      items: 2,
      dots: false,
    },
    728: {
      items: 3,
      dots: false,
    },
    960: {
      items: 3,
      dots: false,
    },
    1200: {
      items: 3,
      dots: true,
    },
  },
});
$(".owl-carousel2").owlCarousel({
  autoplay: true,
  items: 3,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  nav: true,
  loop: true,
  lazyLoad: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    485: {
      items: 2,
      dots: true,
    },
    728: {
      items: 3,
      dots: true,
    },
    960: {
      items: 3,
      dots: false,
    },
    1200: {
      items: 3,
      dots: true,
    }
  }
});
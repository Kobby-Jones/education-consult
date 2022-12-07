$(".owl-carousel1").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  nav: true,
  navText:["⬅","➡"],
  loop: true,
  lazyLoad: true,
  dots:true,
  responsive: {
    0: {
      items: 1,
    },
    485: {
      items: 2,
    },
    728: {
      items: 3,
    },
    960: {
      items: 3,
      
    },
    1200: {
      items: 3,
      
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

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target =  +counter.getAttribute('data-val');
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  }
  updateCounter();
});

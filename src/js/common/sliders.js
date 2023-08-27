export function initSliders() {
  const myWay = new Swiper('.screen-5__slider', {
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 16
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      991: {
        slidesPerView: 3.773,
        spaceBetween: 40
      },
    },
    navigation: {
      nextEl: '.screen-5 .swiper-button-next',
      prevEl: '.screen-5 .swiper-button-prev',
    },
  });

  const publications = new Swiper('.screen-10__slider', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      991: {
        slidesPerView: 3.773,
        spaceBetween: 16
      },
    },
    navigation: {
      nextEl: '.screen-10 .swiper-button-next',
      prevEl: '.screen-10 .swiper-button-prev',
    },
  });



}
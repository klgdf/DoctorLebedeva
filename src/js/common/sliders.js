export function initSliders() {
  const myWay = new Swiper('.screen-6__slider', {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.screen-6 .swiper-button-next',
      prevEl: '.screen-6 .swiper-button-prev',
    },
  });

  const publications = new Swiper('.screen-8__slider', {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.screen-8 .swiper-button-next',
      prevEl: '.screen-8 .swiper-button-prev',
    },
  });

  const reviews = new Swiper('.reviews-slider .swiper', {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.reviews-slider .swiper-button-next',
      prevEl: '.reviews-slider .swiper-button-prev',
    },
  });


  const beforeAfter = new Swiper('.before-after-slider .swiper', {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
    navigation: {
      nextEl: '.before-after-slider .swiper-button-next',
      prevEl: '.before-after-slider .swiper-button-prev',
    },
  });

  const sertificates = new Swiper('.sert .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.sert .swiper-button-next',
      prevEl: '.sert .swiper-button-prev',
    },
  });

}
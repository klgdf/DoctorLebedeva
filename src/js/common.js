"use strict";
//import { path } from "../../gulp/config/path.js";
//import * as flsFunc from "./common/isWebp.js";
import { CountUp } from 'countup.js';
import * as modal from "./common/modal.js";

import * as click from "./common/event/click.js";

import { initSliders } from "./common/sliders.js";
import { addToggleEventListeners } from "./common/toggle-content.js";

// Основной код после загрузки страницы.
document.addEventListener("DOMContentLoaded", (e) => {
  initSliders();
  addToggleEventListeners();
  click.init();

  // Функция для начала анимации счетчика при попадании в область видимости
  const animateCounterOnScroll = (element) => {
    const initialValue = 0;
    const targetValue = parseInt(element.textContent, 10);

    const options = {
      startVal: initialValue,
      endVal: targetValue,
      duration: 1.5,
    };

    const countUp = new CountUp(element, targetValue, options);

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  };

  // Создаем объект Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Запускаем анимацию только если элемент попадает в зону видимости
        animateCounterOnScroll(entry.target);
        observer.unobserve(entry.target); // Отключаем наблюдение после анимации
      }
    });
  });

  // Находим все элементы с классом "screen-1__number"
  const counters = document.querySelectorAll('.screen-1__number span');

  // Начинаем наблюдение за каждым элементом
  counters.forEach((counter) => {
    observer.observe(counter);
  });


  (function () {

  })();


  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      if (document.querySelector("html").scrollTop > 10) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }
  });
});


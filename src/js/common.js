"use strict";
//import { path } from "../../gulp/config/path.js";
//import * as flsFunc from "./common/isWebp.js";

import * as modal from "./common/modal.js";

import * as click from "./common/event/click.js";

import { initSliders } from "./common/sliders.js";
import { addToggleEventListeners } from "./common/toggle-content.js";

// Основной код после загрузки страницы.
document.addEventListener("DOMContentLoaded", (e) => {
  initSliders();
  addToggleEventListeners();
  click.init();

  (function () {

  })();


  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      if (document.querySelector("html").scrollTop > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }
  });
});

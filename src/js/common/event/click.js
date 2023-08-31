import * as modal from "../modal.js";

const ClickSelector = (element, className) => {
  try {
    if (element.classList.contains(className)) {
      return element;
    } else {
      let el = element.closest("." + className)
        ? element.closest("." + className)
        : false;
      return el;
    }
  } catch (err) { }
};

export const init = () => {
  document.addEventListener("click", (e) => {
    // Все действия с этом блоке зависят от element
    let target = e.target,
      element = false;

    if (document.querySelector('#menu')) {
      element = ClickSelector(target, 'e_menu');
      if (element) {
        modal.toggle('menu');
        element.classList.toggle('active');
      }
      element = ClickSelector(target, 'e_menu_close');
      if (element) {
        modal.close('menu');
        document.querySelector('.header__burger').classList.remove('active');
      }
    }

    if (document.querySelector('#sert')) {
      element = ClickSelector(target, 'e_sert');
      if (element) {
        modal.open('sert');
      }
      element = ClickSelector(target, 'e_sert_close');
      if (element) {
        modal.close('sert');
      }
    }

  });
};

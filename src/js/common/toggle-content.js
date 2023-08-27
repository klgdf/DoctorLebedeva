function toggleSummary(event) {
  let
    element = event.currentTarget,
    parent = element.parentElement,
    content = parent.querySelector('.item-mob__content');
  parent.classList.toggle('active');
  if (parent.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = '1';
  } else {
    content.style.maxHeight = '0';
    content.style.opacity = '0';
  }
}

function reset(element) {
  let
    parent = element.parentElement,
    content = parent.querySelector('.item-mob__content');
  if (parent.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = '1';
  }
}

export function addToggleEventListeners() {
  const elements = document.querySelectorAll('.item-mob__head');
  elements.forEach(element => {

    reset(element);

    if (element.classList.contains('summary')) {
      element.addEventListener('click', toggleSummary);
    }

  });
}



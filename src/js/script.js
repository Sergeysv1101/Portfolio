const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
// For procents 
// const counters = document.querySelectorAll('.skills__progress-item-num'),
//        lines = document.querySelectorAll('.line_empty');
// counters.forEach( (item, icon) => {
//     lines[i].style.width = item.innerHTML;
// }); 

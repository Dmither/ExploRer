let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.nav');
let burger = document.querySelector('.burger');
body.addEventListener('scroll', function(){
  if (body.scrollTop > 40){
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }
})
burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  menu.classList.toggle('nav_active');
})
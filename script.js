'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Scrolling

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//
// Page navigation

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );
// SCROLL
// event delegation use
//1. Add event listener to common parent element
//2. Determined what element originated the vent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Mathcing strategy
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ///////////Selecting elements

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// // console.log(allSection);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// // console.log(document.getElementsByClassName('btn'));

// ///////////creating and inserting elements

// //.insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML = `We use cookies for improved functionality and anatylitcs. <button class="btn btn--close-cookie">Got it! </button>`;

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Delete elements

// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
//   // message.parentElement.removeChild(message);
// });

// // Styles

// message.style.backgroundColor = '#37384d';
// message.style.width = '120%';
// // console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // // Attributes
// // const logo = document.querySelector('.nav__logo');
// // console.log(logo.src);
// // console.log(logo.className);
// // console.log(logo.getAttribute('designer'));
// // logo.setAttribute('company', 'Bankist');
// // logo.alt = 'Beatiful minimalist logo'; //Change the attribute value

// //rgb(255,255,255)

// // const randomInt = (min, max) =>
// //   Math.floor(Math.random() * (max - min + 1) + min);

// // const randomColor = () =>
// //   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // document.querySelector('.nav__link').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// // });
// // document.querySelector('.nav__links').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// // });
// // document.querySelector('.nav').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// // });

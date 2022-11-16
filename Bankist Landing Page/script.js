'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const allSection = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');


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
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
///////Old way
btnScrollTo.addEventListener('click', function (e) {
  const s1croods = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1croods.left + window.pageXOffset,
    top: s1croods.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
*/
//////  New version only work in new browser
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation

// Traditional way

// document.querySelectorAll('.nav__link').forEach(
//   function (el) {
//     el.addEventListener('click', function (e) {
//       e.preventDefault();
//       const id = e.target.getAttribute('href');
//       document.querySelector(id).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

//  Event Deligation
// 1. Add Event listner to common parent Element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard Clause
  if (!clicked) return;
  // Active Tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // Active Content Area
  tabsContent.forEach(tabContent => tabContent.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu Fade Animation
function hoverEffect(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', hoverEffect.bind(0.5));
nav.addEventListener('mouseout', hoverEffect.bind(1));

// Sticky NavBar: Intersection Observer API

function stickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal Section

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images
function loadImg(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// Slider
slider();
function slider() {

  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');
  let currSlide = 0;
  let maxSlide = slides.length - 1;

  function createDots() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`);
    });
  };

  function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  };
  function gotoSlide(s) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - s)}%)`;
    });
  };
  function slideMov(slide) {
    gotoSlide(slide);
    activateDot(slide);
  };
  function nextSlide() {
    currSlide === maxSlide ? currSlide = 0 : currSlide++;
    slideMov(currSlide);
  };
  function previousSlide() {
    currSlide === 0 ? currSlide = maxSlide : currSlide--;
    slideMov(currSlide);
  };

  function init() {
    gotoSlide(0);
    createDots();
    activateDot(0);

  };
  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      slideMov(slide);
    }
  });
};
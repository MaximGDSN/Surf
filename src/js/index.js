
// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();



import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiperHeader = new Swiper('.swiper__header', {
	direction: 'horizontal',
	loop: true,
	speed:1000,
	autoplay: {
		delay: 6500,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });

 const swiperSurf = new Swiper('.swiper__surf', {
	direction: 'horizontal',
	speed:600,
	centeredSlides:true,
	loop:true,
	grapCursor:true,
	spaceBetween: 0,
	slidesPerView: 4,
	
	slideToClickedSlide:true,
	breakpoints: {
		1920: {
			slidesPerView: 5,
		},
		1440: {
			slidesPerView: 4,
		},
	},

	// initialSlide: 2,
	// realIndex: 2,

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });




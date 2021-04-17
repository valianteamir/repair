'use strict';

const button = document.querySelectorAll('.button');
const modal  = document.querySelector('.modal-bg');
const closeBtn  = document.querySelector('.modal__close');
const cardsHalfFirst = document.querySelectorAll('.card-half-row-1');
const cardsHalfSecond = document.querySelectorAll('.card-half-row-2');
const cardsThirdFirst = document.querySelectorAll('.card-third-row-1');
const cardsThirdSecond = document.querySelectorAll('.card-third-row-2');
const cardsThirdSquared = document.querySelectorAll('.card-third-row-3');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const card4 = document.querySelector('.card-4');
const card5 = document.querySelector('.card-5');
const card6 = document.querySelector('.card-6');

button.forEach(function (item) {
	item.addEventListener('click', function name() {
		modal.classList.add('modal-bg_active');
	});
});

closeBtn.addEventListener('click', function() {
	modal.classList.remove('modal-bg_active');
});

const sliderMain = new Swiper('.portfolio__slider', {
	slidesPerView: 3,
	speed: 500,
	navigation: {
		nextEl: '.arrow-right',
		prevEl: '.arrow-left'
	},
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	pagination: {
		el: '.portfolio__pagination',
		clickable: true,
	},
	scrollbar: {
		el: '.portfolio__scrollbar',
		draggable: true,
	},
	touchAngle: 90,
	slideToClickedSlide: true,
	keyboard: {
		enabled: true,
		pageUpDown: false,
	},
	mousewheel: {
	},
	autoHeight: true,
	watchOverflow: true,
	spaceBetween: 0,
	slidesPerGroup: 1,
	centeredSlides: false,
	initialSlide: 0,
	slidesPerColumn: 1,
	loop: false,
	freeMode: true,
	// direction: 'horizontal',
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },
	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },
	// effect: 'cube',
	// cubeEffect: {
	// 	shadow: true,
	// 	shadowOffset: 60,
	// 	shadowScale: 0.4,
	// 	slideShadows: 0,
	// }
	// effect: 'coverflow',
	// coverflowEffect: {
	// 	slideShadows: false,
	// 	modifier: 1,
	// 	rotate: 80,
	// 	stretch: 0,
	// 	depth: 800,
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		}
	},
	// preloadImages: false,
	// lazy: true,
	// zoom: {
	// 	maxRatio: 3,
	// 	minRatio: 1,
	// },
	// thumbs: {
	// 	swiper: {
	// 		el: '.image-mini-slider',
	// 	slidesPerView: 5,
	// 	}
	// },
});

// sliderMain.controller.control = textSlider;
// textSlider.controller.control = sliderMain;

window.addEventListener('scroll', function () {
	let scrollTop = window.pageYOffset;
	let windowWidth = document.documentElement.clientWidth;

	if (windowWidth > 1200) {
			if (scrollTop >= 1370) {
		cardsHalfFirst.forEach(function (item) {
			item.style.display = 'block';
			item.classList.add('animate__animated', 'animate__fadeInUp');
		});
	}
	if (scrollTop >= 1801) {
		cardsHalfSecond.forEach(function (item) {
			item.style.display = 'block';
			item.classList.add('animate__animated', 'animate__fadeInUp');
		});
	}
	}
	if (windowWidth < 1200 && windowWidth > 992) {
		if (scrollTop >= 2109) {
			cardsThirdFirst.forEach(function (item) {
				item.style.display = 'block';
				item.style.animationDuration = '1s';
				item.classList.add('animate__animated', 'animate__fadeInUp');
		});
	}
		if (scrollTop >= 2610) {
			cardsThirdSecond.forEach(function (item) {
				item.style.display = 'block';
				item.style.animationDuration = '1s';
				item.classList.add('animate__animated', 'animate__fadeInUp');
		});
	}
		if (scrollTop >= 3112) {
			cardsThirdSquared.forEach(function (item) {
				item.style.display = 'block';
				item.style.animationDuration = '1s';
				item.classList.add('animate__animated', 'animate__fadeInUp');
			});
	}
	} else if (windowWidth < 992 && windowWidth > 768) {
		
	} else if (windowWidth < 768 && windowWidth > 576) {
		
	}
});

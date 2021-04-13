'use strict';

const button = document.querySelectorAll('.button');
const modal  = document.querySelector('.modal-bg');
const closeBtn  = document.querySelector('.modal__close');

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
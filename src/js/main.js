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

const mySwiper = new Swiper('.portfolio__slider', {
	slidesPerView: 3,
	speed: 500,
	navigation: {
		nextEl: '.arrow-right',
		prevEl: '.arrow-left'
	},
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: '.portfolio__pagination',
		type: 'fraction',
	},
	scrollbar: {
		el: '.portfolio__scrollbar',
		draggable: true,
	},
});
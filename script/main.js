"use strict"

//Переменные
const bars = document.getElementsByClassName('bar')[0]; //Кнопка для открытия меню
const menu = document.getElementsByClassName('m_menu')[0]; //Блок мобильного меню
const close = document.getElementsByClassName('close_menu')[0]; //Кнопка закрытия меню
const homeLink = document.querySelector('.home'); // Ссылка на главную страницу
const navLinks = document.querySelectorAll('#nav_desktop .nav__item'); // Список ссылок в шапке (десктоп версия)
const mobileLinks = document.querySelectorAll('.mobile_menu .nav__item'); // Список ссылок в шапке (мобильная версия)
const scrollBtn = document.querySelector('.scroll-up'); // Кнопка скролла на верх
const scroll_btn = document.getElementById("scroll_btn");// Кнопка скролла в шапке
const header = document.querySelector('header');

let resetLinks = () => {
	navLinks.forEach((link) => {
		link.classList.remove('active');
	});
}

//Отобразить мобильное менб
bars.addEventListener('click', function () {
	menu.style.transform = 'translateX(0%)';
});

//Скрыть мобильное меню
close.addEventListener('click', function () {
	menu.style.transform = 'translateX(-100%)';
});

//Скролл к указаному элементу

scroll_btn.addEventListener('click', function () {
	const scroll_el = document.getElementsByClassName('content')[0];
	const scroll = scroll_el.offsetTop;
	window.scrollTo(0, scroll);
});

//Обработка нажатий на ссылки мобильного меню

mobileLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menu.style.transform = 'translateX(-100%)'; //Скрытие мобильного меню
	});
})

//Обработка скролла страницы. Если в активной области шапка сайта, элемент меню Home становиться активным
window.addEventListener('scroll', () => {
	if (this.scrollY < 100) {
		resetLinks();
		homeLink.classList.add('active');
	}
	if(this.scrollY > 700){
		scrollBtn.style.display = 'flex';
	}else{
		scrollBtn.style.display = 'none';
	}
});

scrollBtn.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

//Инициализация карты
var myMap;
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 10
	});
}


navLinks.forEach((item) => {
	item.addEventListener('click', function () {
		resetLinks();
		this.classList.add('active');
	});
});


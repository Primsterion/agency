"use strict"

//Переменные
const bars = document.querySelector('.bar'), //Кнопка для открытия меню
 menu = document.querySelector('.m_menu'), //Блок мобильного меню
 close = document.querySelector('.close_menu'), //Кнопка закрытия меню
 homeLink = document.querySelector('.home'), // Ссылка на главную страницу
 navLinks = document.querySelectorAll('#nav_desktop .nav__item'), // Список ссылок в шапке (десктоп версия)
 mobileLinks = document.querySelectorAll('.mobile_menu .nav__item'), // Список ссылок в шапке (мобильная версия)
 scrollBtn = document.querySelector('.scroll-up'), // Кнопка скролла на верх
 scroll_btn = document.querySelector("#scroll_btn");// Кнопка скролла в шапке

//Сброс активных стилей для ссылок
let resetLinks = () => {
	navLinks.forEach((link) => {
		link.classList.remove('active');
	});
}

//Отобразить мобильное меню
bars.addEventListener('click', () => {
	menu.style.transform = 'translateX(0%)';
});

//Скрыть мобильное меню
close.addEventListener('click', () => {
	menu.style.transform = 'translateX(-100%)';
});

//Скролл к указаному элементу

scroll_btn.addEventListener('click', () => {
	const scroll_el = document.querySelector('.content');
	window.scrollTo(0, scroll_el.offsetTop);
});

//Обработка нажатий на ссылки мобильного меню

mobileLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menu.style.transform = 'translateX(-100%)'; //Скрытие мобильного меню после нажатия на ссылку
	});
})

//Обработка скролла страницы. Если в активной области шапка сайта, то элемент меню Home становиться активным
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

//Скролл к началу
scrollBtn.addEventListener('click', () => {
	window.scrollTo(0, 0);
});
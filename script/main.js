"use strict"

window.onload = function() {
	//Section of mobile menu
	const bars = document.getElementsByClassName('bar')[0]; //Кнопка для открытия меню
	const menu = document.getElementsByClassName('m_menu')[0]; //Блок мобильного меню
	const close = document.getElementsByClassName('close_menu')[0]; //Кнопка закрытия меню
	const homeLink = document.querySelector('.home');
	const navLinks = document.querySelectorAll('#nav_desktop .nav__item');


	bars.addEventListener('click', function() {
		menu.style.transform = 'translateX(0%)';		
	});

	close.addEventListener('click', function() {
		menu.style.transform = 'translateX(-100%)';
	});

	//Скролл к указаному элементу
	const scroll_btn = document.getElementById("scroll_btn");
	scroll_btn.addEventListener('click', function(){
		const scroll_el = document.getElementsByClassName('content')[0];
		const scroll = scroll_el.offsetTop;
		window.scrollTo(0, scroll);
	});


	window.addEventListener('scroll', () => {

		if(this.scrollY < 100){
			navLinks.forEach((link) => {
				link.classList.remove('active');
			});
			homeLink.classList.add('active');
		}
	});

	//Инициализация карты
	var myMap;
	ymaps.ready(init); 
	function init () {
		myMap = new ymaps.Map("map", {
		center: [55.76, 37.64], 
		zoom: 10 
		});
	}

	
	for(let i = 0; i < navLinks.length; i++){
		navLinks[i].onclick = function () {
			for(let j = 0; j < this.length; j++){
				this[j].classList.remove('active');
			}
			this.classList.add('active');
		}
	}
}
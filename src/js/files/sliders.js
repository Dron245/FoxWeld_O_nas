/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, EffectFade, Grid} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
 import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	bildSliders()
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (/*window.innerWidth < 768 && */document.querySelector('.production__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.production__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			//observer: true,
			//observeParents: true,
			//slidesPerView: 'auto',
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			allowTouchMove:false,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			
			// freeMode: {
			// 	enabled:true,
			// 	sticky:true,
			// },
			// Эффекты
			//effect: 'fade',
			// autoplay: {
			// 	delay: 0,
			// 	disableOnInteraction: false,
			// 	pauseOnMouseEnter:true,
			// 	//waitForTransition:false
			// },
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.production-arrow_prev',
				nextEl: '.production-arrow_next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
					autoHeight: true,
				},
				778: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.thumbs-history')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const thumbsHistory = new Swiper('.thumbs-history', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs, Grid, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			
			
			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.body-history-arrow_prev',
				nextEl: '.body-history-arrow_next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 0,
					autoHeight: false,
					grid: {
						//rows:3,
						column:2
					},
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 10,
				},
			},
			
			// События
			on: {

			}
		});
		new Swiper('.body-history__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs, EffectFade],
			observer: true,
			thumbs:{
				swiper:thumbsHistory
			},
			observeParents: true,
			slidesPerView: 1,
			//spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				//delay: 3000,
				//disableOnInteraction: false,
			},
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.body-history-arrow_prev',
			// 	nextEl: '.body-history-arrow_next',
			// },

			// Брейкпоинты
			
			/*breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
					autoHeight: true,
				},
				778: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},*/
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.partners__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			//slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.partners-arrow_prev',
				nextEl: '.partners-arrow_next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
					autoHeight: true,
				},
				778: {
					slidesPerView: 3,
					//spaceBetween: 30,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (window.innerWidth < 768 && document.querySelector('.thanks__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.thanks__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			//slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.thanks__prev',
				nextEl: '.thanks__next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 35,
					autoHeight: false,
				},
				778: {
					slidesPerView: 3,
					//spaceBetween: auto,
				},
			},
			
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener("load", windowLoad);
	
	function windowLoad() {
		function digitsCountersInit(digitsCountersItems){
			let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll('[data-digits-counter]');
			if (digitsCounters){
				digitsCounters.forEach(digitsCounter => {
					digitsCountersAnimate(digitsCounter);
				});
			}
		}
		function digitsCountersAnimate(digitsCounter) {
			let startTimestamp = null
			const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1500;
			const startValue = parseInt(digitsCounter.innerHTML);
			const startPosition = 0;
			const step = (timestamp) => {
				if(!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step)
		}
		//digitsCountersInit()

		let options = {
			threshold: 0.5
		}
		let observer = new IntersectionObserver((entries, observer) =>{
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const targerEl = entry.target;
					const digitsCountersItems = targerEl.querySelectorAll('[data-digits-counter]');
					if (digitsCountersItems.length) {
						digitsCountersInit(digitsCountersItems);
					}
					observer.unobserve(targerEl);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.numbers__grid');
		if (sections.length) {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
	}
	// document.querySelector('.form-diller__button').addEventListener('click', check)
	// function check() {
	// 	const chk =document.querySelectorAll('.form-diller__group > .checkbox > input[type="checkbox"]').checked;
	// console.log(chk);
	// if(chk.length < 1) {
	// 	document.querySelector('.form-diller__check').insertAdjacentHTML('beforeend', `<div class="form__error">Выберите</div>`)
	// }
	// }
	
/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
//import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

// const inputMasks = document.querySelectorAll('input');
// if (inputMasks.length) {
// 	flsModules.inputmask = Inputmask().mask(inputMasks);
// }



import { flsModules } from "../modules.js";


const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	
	flsModules.inputmask = Inputmask().mask(inputMasks);
	Inputmask({"mask": "+7(999) 999-9999"}).mask(document.querySelectorAll('.tel'));
	//Inputmask({"mask": "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]"}).mask(document.querySelectorAll('.asd'));
}
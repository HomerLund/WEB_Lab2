import Model from './Model/Model.js';  // Імпортуємо модель
import View from './View/View.js';      // Імпортуємо вигляд
import Controller from './Controller/Controller.js';  // Імпортуємо контролер

// Ініціалізація моделі та вигляду
const model = new Model();
const view = new View();

 // Знаходимо контейнер для калькулятора
 const calculatorContainer = document.getElementById('calculator-container');

 // Додаємо HTML-контент калькулятора в контейнер
 calculatorContainer.appendChild(view.toHtml());

 // Ініціалізація контролера
 new Controller(model, view);
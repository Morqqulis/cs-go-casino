"use strict";

// Получаем элементы
const wheel = document.querySelector(".wheel__cards");
const button = document.querySelector(".wheel__btn");

const AUDIO_FILES = {
  win: "./assets/sounds/win.mp3",
  spin: "./assets/sounds/spin.mp3",
};

// Обработчик клика по кнопке
button.addEventListener("click", () => {
  // Удаляем класс spinning, если он есть
  wheel.classList.remove("spinning");

  // Принудительно пересчитываем стили
  void wheel.offsetWidth;

  // Добавляем класс spinning для запуска анимации
  wheel.classList.add("spinning");
});

"use.strict";

/* Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять 
отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете 
установить некоторые ограничения.
Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и 
контейнером, где будут отображаться отзывы.
Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина 
введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
 */

const button = document.querySelector("button");
const input = document.querySelector("input");
const div = document.getElementsByClassName("reviews")[0];

button.addEventListener("click", () => {
  try {
    if (input.value.length >= 50 && input.value.length <= 500) {
      let new_h = document.createElement("h3");
      new_h.className = "review";
      new_h.textContent = input.value;
      div.appendChild(new_h);
    } else {
      throw new Error("Длина введенного отзыва менее 50 или более 500 символов");
    }
  } catch (err) {
    console.log(err);
    alert(err);
  }
});
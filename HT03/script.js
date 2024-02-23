"use strict";

const button_add = document.getElementsByClassName("btn_1")[0];
const input_product = document.getElementsByClassName("product_name")[0];
const input_feedback = document.getElementsByClassName("feedback")[0];

button_add.addEventListener("click", () => {
    const product = input_product.value;
    const feedback = input_feedback.value;
    
    if (localStorage.getItem(product) === null) {
        let array = [];
        array.push(feedback);
        localStorage.setItem(product, JSON.stringify(array));
        alert("Отзыв успешно добавлен");
    } else {
        let array_new = JSON.parse(localStorage.getItem(product));
        array_new.push(feedback);
        localStorage.setItem(product, JSON.stringify(array_new));
        alert("Отзыв успешно добавлен");
    }
    

})



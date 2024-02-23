"use strict";
const div = document.querySelector("div");

for (let i = 0; i < localStorage.length; i++) {
    let newelement = document.createElement("h1");
    newelement.className = localStorage.key(i);
    newelement.textContent = localStorage.key(i);
    div.appendChild(newelement);
    newelement.addEventListener("click", () => {
        let array = JSON.parse(localStorage.getItem(localStorage.key(i)));
        for (let j = 0; j < array.length; j++) {
            let new_h = document.createElement("p");
            let new_btn = document.createElement("button");
            new_btn.className = "new_btn";
            new_btn.textContent = "Удалить отзыв";
            new_h.className = j + " " + "text2";
            new_h.textContent = array[j];
            div.appendChild(new_h);
            new_h.appendChild(new_btn);
            new_btn.addEventListener("click", () => {
                array.splice(j, 1);
                localStorage.setItem(localStorage.key(i), JSON.stringify(array));
                new_h.remove();
            })
        }

    })

    
}




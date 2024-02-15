'use strict';

/* Вы управляете рестораном, в котором работают разные повара, специализирующиеся
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения 
заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк. */

console.log('Задание 2');

let specialization  = new Map();
let orders = new Map();
let dishesChef = new Map();


specialization.set('Виктор', 'Пицца');
specialization.set('Ольга', 'Суши');
specialization.set('Дмитрий', 'Десерты');

dishesChef.set("Пицца Маргарита", "Виктор");
dishesChef.set("Пицца Пепперони", "Виктор");
dishesChef.set("Суши Филадельфия", "Ольга");
dishesChef.set("Суши Калифорния", "Ольга");
dishesChef.set("Тирамису", "Дмитрий");
dishesChef.set("Чизкейк", "Дмитрий");

let client_1  = {
    name: 'Алексей',
}
let client_2  = {
    name: 'Мария',
}
let client_3  = {
    name: 'Ирина',
}
let alex_order = new Set();
alex_order.add("Пицца Пепперони");
alex_order.add("Тирамису");
let maria_order = new Set();
maria_order.add("Суши Калифорния");
maria_order.add("Пицца Маргарита");
let irina_order = new Set();
irina_order.add("Чизкейк");

orders.set(client_1, alex_order);
orders.set(client_2, maria_order);
orders.set(client_3, irina_order);

function findChefForDish(dishName) {  // Поиск повара по названию блюда
    const chefName = dishesChef.get(dishName);
    return chefName ? `${chefName}` : "Блюдо не найдено";
  }

function findChefForOrder(name_order) {  // Поиск поваров по заказу
    for (const iterator of name_order.values()) {
        console.log(`${iterator}` + " - " + `Повар: ${findChefForDish(iterator)}`);
    }
}

function findInfoForClient(order) { // Поиск информации о заказе по клиенту
    console.log(`${order.name} заказал:`);
    findChefForOrder(orders.get(order));
}

console.log(findInfoForClient(client_1));
console.log(findInfoForClient(client_2));
console.log(findInfoForClient(client_3));


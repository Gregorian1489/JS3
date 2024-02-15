'use strict';
/* 
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции.
• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ 
Symbol.iterator. Каждый альбом имеет следующую структуру:
{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}
• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:
Название альбома - Исполнитель (Год выпуска)
 */
console.log('Задание 1');
const musicCollection = {
  albums: [
    { title: "Title_1", artist: "Artist_1", year: "2020" },
    { title: "Title_2", artist: "Artist_2", year: "2021" },
    { title: "Title_3", artist: "Artist_3", year: "2022" },
  ],
  [Symbol.iterator]() {
    let index = 0;
    return {
        next: () => {
            if (index < this.albums.length) {
                const albums = this.albums[index++];
                return { 
                  value: albums, done: false};
            } else {
                return { done: true};
            }
        },
    };
  },
};

for (const album of musicCollection) {
  console.log(`Название альбома: ${album.title}, Исполнитель: ${album.artist}, Год: ${album.year}`);
}

console.log("");
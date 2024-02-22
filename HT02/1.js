"use.strict";

/* Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное
свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения
информации о наличии книги.
Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и
представляет собой список книг в библиотеке.
Реализуйте геттер allBooks, который возвращает текущий список книг.
Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким 
названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги 
с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true 
или false в зависимости от того, есть ли такая книга в списке или нет.
Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку. */

class Book {
    constructor(author, title, year) {
        this.author = author;
        this.title = title;
        this.year = year;
    }
}

class ManageLibrary {
    #books = [];

    constructor(initialBooks = []) {
        const uniqueBooks = new Set(initialBooks);
        if (uniqueBooks.size !== initialBooks.length) {
          throw new Error("Библиотека содержит дубликаты книг");
        }
        this.#books = initialBooks;
      }

    get allBooks() {
        return this.#books;
    }

    addBook(book) {
        for (const iterator of this.#books) {
            if (iterator.title === book.title) {
                throw new Error("Такая книга уже есть в библиотеке");
            }
        }
        this.#books.push(book);
    }
  

     removeBook(title) {
        let flag = true;
        for (const iterator of this.#books){
            if (iterator.title === title) {
                this.#books.splice(this.#books.indexOf(iterator), 1);
                console.log(`Книга "${title}" удалена успешно`);
                flag = false;
            }
        }
        if (flag) {
            throw new Error("Такой книги нет в библиотеке");
        }
        
    } 

    hasBook(title) {
        for (const iterator of this.#books) {
            if (iterator.title === title) {
                return true;
            }
        }
        return false;
    }
}

const book_1 = new Book("author_1", "title_1", 2020);
const book_2 = new Book("author_2", "title_2", 2020);
const book_3 = new Book("author_3", "title_3", 2021);
const Library_1 = new ManageLibrary();
Library_1.addBook(book_1);
Library_1.addBook(book_2);
Library_1.addBook(book_3);
console.log(Library_1.allBooks);
Library_1.removeBook("title_1");

const Library_2 = new ManageLibrary([book_1, book_2, book_3]);
console.log(Library_2.allBooks);
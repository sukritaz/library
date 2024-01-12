const myLibrary = [];

const addBookButton = document.getElementById("add-book-button");
const books = document.getElementById("booksGrid");

addBookButton.addEventListener("click", () => {
    openAddBookModal();
    
});

function Book(name, author) {
    this.name = name;
    this.author = author;
}

Book.prototype.sayName = function() {
    alert(this.name + " author: " + this.author);
}

function addBookToLibrary() {

}

function openAddBookModal() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    let book = new Book(document.getElementById('bookTitle').value, document.getElementById('authorName').value);
    myLibrary.push(book);
    updateLibrary();
}

function updateLibrary() {
    createBookElement(myLibrary.slice(-1)[0]);
}

function createBookElement(book) {
    const bookElem = document.createElement('div');
    const bookNameElem = document.createElement('div');
    const bookNameTitleElem = document.createElement('div');
    const bookAuthorElem = document.createElement('div');
    const bookAuthorTitleElem = document.createElement('div');
    const readToggleElem = document.createElement('button');

    bookElem.className = "book";
    bookNameTitleElem.className = "bookTitleName"
    bookNameElem.className = "bookName";
    bookAuthorTitleElem.className = "bookAuthorTitle"
    bookAuthorElem.className = "bookAuthor";
    readToggleElem.id = "toggleRead";

    bookNameTitleElem.textContent = "Name";
    bookNameElem.textContent = book.name;
    bookAuthorTitleElem.textContent = "Author";
    bookAuthorElem.textContent = book.author;
    readToggleElem.textContent = "READ"

    readToggleElem.addEventListener("click", function() {
        this.classList.toggle("active");
    });
    

    bookElem.appendChild(bookNameTitleElem);
    bookElem.appendChild(bookNameElem);
    bookElem.appendChild(bookAuthorTitleElem)
    bookElem.appendChild(bookAuthorElem);
    bookElem.appendChild(readToggleElem);

    books.appendChild(bookElem);
}


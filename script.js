const myLibrary = [];

const addBookButton = document.getElementById("add-book-button");
const books = document.getElementById("booksGrid");

addBookButton.addEventListener("click", () => {
    openAddBookModal();
    
});

function Book(id, name, author, isRead) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.isRead = isRead;
}

Book.prototype.sayName = function() {
    alert(this.name + " author: " + this.author);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function deleteBookFromLibraryById(id) {
    const index = myLibrary.findIndex(book => book.id===id);
    myLibrary.splice(index, 1);
    console.log(`Deleted book with id: ${id}. Now the library holds:`, myLibrary);
}

function openAddBookModal() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    let id = "book" + myLibrary.length;
    let book = new Book(id, document.getElementById('bookTitle').value, document.getElementById('authorName').value, document.getElementById('isReadCheckBox').value);
    addBookToLibrary(book);
    updateLibrary();
    closeModal();
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
    const deleteBookButtonElem = document.createElement('button');

    bookElem.className = "book";
    bookElem.id = book.id;
    bookNameTitleElem.className = "bookTitleName"
    bookNameElem.className = "bookName";
    bookAuthorTitleElem.className = "bookAuthorTitle"
    bookAuthorElem.className = "bookAuthor";
    readToggleElem.id = "toggleRead";
    deleteBookButtonElem.className = "deleteButton";

    bookNameTitleElem.textContent = "Name";
    bookNameElem.textContent = book.name;
    bookAuthorTitleElem.textContent = "Author";
    bookAuthorElem.textContent = book.author;
    readToggleElem.textContent = "READ"
    deleteBookButtonElem.textContent = "DELETE";

    if(book.isRead) {
        readToggleElem.classList.toggle("active", book.isRead);
    }

    readToggleElem.addEventListener("click", function() {
        this.classList.toggle("active");
    });

    deleteBookButtonElem.addEventListener("click", function () {
        bookElem.remove();
        deleteBookFromLibraryById(bookElem.id);
    })
    

    bookElem.appendChild(bookNameTitleElem);
    bookElem.appendChild(bookNameElem);
    bookElem.appendChild(bookAuthorTitleElem)
    bookElem.appendChild(bookAuthorElem);
    bookElem.appendChild(readToggleElem);
    bookElem.appendChild(deleteBookButtonElem);

    books.appendChild(bookElem);
}


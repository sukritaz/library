const myLibrary = [];

const addBookButton = document.getElementById("add-book-button");

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
    // event.preventDefault();
    let book = new Book(document.getElementById('bookTitle').value, document.getElementById('authorName').value);
    book.sayName();
}


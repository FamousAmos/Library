const library = document.querySelector(".library");
let myLibrary = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: true,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    pages: 374,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("What is the title of the book?");
  const author = prompt("Who is the author of this book?");
  const pages = prompt("What is the number of pages?");
  const read = prompt("Have you read it?");
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function render() {
  for (const book of myLibrary) {
    const currentBook = document.createElement("div");
    currentBook.className = "book";
    currentBook.innerHTML = `<div class="card-info">
        <div class="title">${book.title}</div>
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
      </div>`;

    library.appendChild(currentBook);
  }
}

render();

const library = document.querySelector(".library");
const newBook = document.querySelector(".new-book");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const add = document.querySelector(".add");

newBook.addEventListener("click", () => (popup.style.display = "block"));
close.addEventListener("click", () => (popup.style.display = "none"));
add.addEventListener("click", () => {
  addBookToLibrary();
  clearForm();
  render();
});

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
  popup.style.display = "none";
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = checkStatus();
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function checkStatus() {
  return readInput.checked;
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

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}

render();

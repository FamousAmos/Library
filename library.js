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
  const read = readInput.checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function render() {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
}

function displayBook(book) {
  const currentBook = document.createElement("div");
  currentBook.className = "book";
  currentBook.setAttribute("id", myLibrary.indexOf(book));
  currentBook.innerHTML = `
      <div class="card-info">
        <div class="title">${book.title}</div>
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${readDisplay(book)}</p>
      </div>`;
  currentBook.appendChild(createRemoveButton(currentBook.id));

  library.appendChild(currentBook);
}

function readDisplay(book) {
  if (book.read) {
    return "Read";
  } else {
    return "Not Read Yet";
  }
}

function createRemoveButton(id) {
  const removeDiv = document.createElement("div");
  const remove = document.createElement("button");
  remove.className = "delete";
  remove.textContent = "Delete";
  remove.addEventListener("click", () => removeBook(id));
  removeDiv.appendChild(remove);
  return removeDiv;
}

function removeBook(id) {
  myLibrary.splice(id, 1);
  const book = document.getElementById(`${id}`);
  book.remove();
}

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}

render();

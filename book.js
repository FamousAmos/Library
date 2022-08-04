let myLibrary = [];

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

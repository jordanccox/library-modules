// write your code here to make the tests pass
var Library = function () {
  var books = [];

  var addBook = function (book) {
    books.push(book);
  };

  var checkOutBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute("checkedOut", true);
    } else {
      console.log(`Error! The library has no record of ${book}`);
    }
  };

  var returnBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute("checkedOut", false);
    } else {
      console.log(`Error! The library has no record of ${book}`);
    }
  }

  return {
    addBook,
    checkOutBook,
    returnBook
  };
};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function (attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    } else {
      console.log(`Error! ${attribute} does not exist`);
    }
  };

  var setAttribute = function (attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    } else {
      console.log(`Error! ${attribute} does not exist`);
    }
  };

  return {
    getAttribute,
    setAttribute
  };
};

var fellowshipOfTheRing = Book("Fellowship of the Ring", 'JRR Tolkien');
var library = Library();
library.addBook(fellowshipOfTheRing);
library.checkOutBook(fellowshipOfTheRing);
library.returnBook(fellowshipOfTheRing);
console.log(fellowshipOfTheRing.getAttribute("checkedOut"));



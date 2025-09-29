class Book {
    #isAvailable; // private field (using # in JS)
  
    constructor(title, author, isAvailable) {
      this.title = title;       // array of book titles
      this.author = author;     // array of authors
      this.#isAvailable = isAvailable; // array of booleans
    }
  
    // Method to borrow a book by its name
    borrowBook(bookName) {
      for (let i = 0; i < this.title.length; i++) {
        if (this.title[i] === bookName) {
          if (this.#isAvailable[i]) {
            this.#isAvailable[i] = false;
            console.log(`You borrowed: ${bookName}`);
            return;
          } else {
            console.log("Book is not available.");
            return;
          }
        }
      }
      console.log("Book not found.");
    }
  
    // Method to return a book by its name
    returnBook(bookName) {
      for (let i = 0; i < this.title.length; i++) {
        if (this.title[i] === bookName) {
          if (!this.#isAvailable[i]) {
            this.#isAvailable[i] = true;
            console.log(`You returned: ${bookName}`);
            return;
          }
        }
      }
      console.log("Book not found or already returned.");
    }
  
    // Method to get the availability of a book by its name
    getAvailability(bookName) {
      for (let i = 0; i < this.title.length; i++) {
        if (this.title[i] === bookName) {
          console.log(this.#isAvailable[i]);
          return this.#isAvailable[i];
        }
      }
      console.log("Oops! Book is not available , Please check after some time :- " + bookName)
        return false;
    }
  }
  
  // Example usage
  const myBooks = new Book(
    ["Book1", "Book2", "Book3"],
    ["Author1", "Author2", "Author3"],
    [true, false, true]
  );
  
  myBooks.borrowBook("Book1");   // You borrowed: Book1
  myBooks.getAvailability("Book1"); // false
  myBooks.returnBook("Book1");   // You returned: Book1
  myBooks.getAvailability("Book1"); // true
  
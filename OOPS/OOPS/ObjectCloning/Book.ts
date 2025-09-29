// class Book{
//     constructor(public title: string, public author: string){};

//     clone(): Book{
//         return new Book(this.title, this.author);
//     }
// }

// class Library{
//     public books: Book[] = [];

//     constructor(public name: string){}

//     addBook(book: Book): void {
//         this.books.push(book);
//       }

//       shallowClone(): Library{
//         const cloned = new Library(this.name);

//         cloned.books = this.books; // Shallow copy (shared references)
//         return cloned;
//       }

//       deepClone(): Library{
//         const cloned = new Library(this.name);
//         //clone each Book Object

//         cloned.books =  this.books.map(book => book.clone());
//         return cloned;
//       }

//       display(): void {
//         console.log(`Library : ${this.name}`);
//         this.books.forEach(book => {
//           console.log(`Book : ${book.title}, Author : ${book.author}`);
//         });
//         console.log();
//       }
// }


// // ---------- DRIVER CODE ----------
// //Create Librabry
// const library = new Library("Central_library");
// const titles = ["Book_A", "Book_B", "Book_C"];
// const authors = ["Author_A", "Author_B", "Author_C"];

// for(let i=0; i<titles.length; i++){
//     library.addBook(new Book(titles[i], authors[i]));
// }

// console.log("Original Library :");
// library.display();

// // Create clones
// const shallowClone = library.shallowClone();
// const deepClone = library.deepClone();

// // Modify original
// const changeIndex = 1;
// library.books[changeIndex].title = "Treasure_Island";
// library.books[changeIndex].author = "Robert_Louis_Stevenson";

// console.log("After Modifications :\n");

// console.log("Original Library :");
// library.display();

// console.log("Shallow Clone :");
// shallowClone.display();

// console.log("Deep Clone :");
// deepClone.display();


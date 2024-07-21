// Write a JavaScript program that creates a class `Book` with properties for 
//title, author, and publication year. Include a method to display book details. 
//Create a subclass called 'Ebook' that inherits from the 'Book' class and
// includes an additional property for book price. 
//Override the display method to include the book price. 
//Create an instance of the 'Ebook' class and display its details.

class Book {
    constructor(title, author, year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    displayBookDetails(){
        console.log(`Title: ${this.title}, Author: ${this.author}, year: ${this.year}`);

    }
}
class Ebook extends Book {
    constructor(title, author, year, price) {
      super(title, author, year);
      this.price = price;
    }
  
    displayBookDetails() {
      super.displayBookDetails();
      console.log(`Price: $${this.price}`);
    }
  }

  const ebook = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 9.99);
  

  console.log("Ebook Details:");
  ebook.displayBookDetails();
//Write a JavaScript program that creates a class called Product with properties for 
//product ID, name, and price. Include a method to calculate the total price 
//by multiplying the price by the quantity. Create a subclass called 
//PersonalCareProduct that inherits from the Product class and adds an additional 
//property for the warranty period. Override the total price calculation method to 
//include the warranty period. Create an instance of the PersonalCareProduct 
//class and calculate its total price.

class Product {
    constructor(productId, name, price, quantity) {
      this.productId = productId;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price
    calculateTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  class PersonalCareProduct extends Product {
    constructor(productId, name, price, quantity, warrantyPeriod) {
      super(productId, name, price, quantity);
      this.warrantyPeriod = warrantyPeriod;
    }

    calculateTotalPrice() {
      const totalPriceWithoutWarranty = super.calculateTotalPrice();
      return totalPriceWithoutWarranty + this.warrantyPeriod;
    }
  }
  
  const personalCareProduct = new PersonalCareProduct("P123", "Shampoo", 10, 2, 1);
 
  const totalPrice = personalCareProduct.calculateTotalPrice();
  console.log("Total Price:", totalPrice);
  
const Shape = require('./shape');

// the extends keyword inherits the properties and methods from the Shape class
class Rectangle extends Shape {
  constructor(sideA, sideB) {

    // variables to calculate are and perimeter using Rectangles properties
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    // super gives us access to Shape's constructor properties and methods
    super(area, perimeter); 

    // these properties are used when we create a new Rectangle object below
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();

class Figure {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  square() {
    return undefined;
  }

  getX() { return this.#x; }
  getY() { return this.#y; }
}

class Circle extends Figure {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  square() {
    return 3.14159 * this.r * this.r;
  }
}

class Rectangle extends Figure {
  constructor(x, y, h, w) {
    super(x, y);
    this.h = h;
    this.w = w;
  }

  square() {
    return this.h * this.w;
  }
}

let circle = new Circle(1, 2, 5);
console.log("Круг: центр (" + circle.getX() + ", " + circle.getY() + "), радиус " + circle.r);
console.log("Площадь круга: " + circle.square());

let rectangle = new Rectangle(3, 4, 6, 8);
console.log("Прямоугольник: центр (" + rectangle.getX() + ", " + rectangle.getY() + "), высота " + rectangle.h + ", ширина " + rectangle.w);
console.log("Площадь прямоугольника: " + rectangle.square());

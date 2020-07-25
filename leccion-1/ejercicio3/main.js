// En el programa definiremos la clase Polygon, Square y Triangle para polígonos regulares (todos sus lados miden lo mismo).  La clase Polygon tendrá:

class Polygon {

// Un atributo para el número de lados, uno para la longitud de la base y otro de la altura.
constructor (numberOfSides, base, height){
 this.numberOfSides = numberOfSides;
 this.base = base;
 this.height = height;
}
// Un método para calcular el perímetro (perimeter) (multiplicar la longitud del lado base por el número de lados)
perimeter () {
return this.base * this.numberOfSides;
}

// Un método para calcular el área (area) (multiplicar base por altura)
area () {
 return this.base * this.height;
}
}
//Las clases Square y Triangle serán subclases de Polygon.

class Square extends Polygon {
  // Un constructor que recibirá exclusivamente la longitud del lado
  constructor(side){
    super (4, side, side); // al usar super, llamamos a los atributos que tiene el padre para poder reescribirlos. en este caso 4 lados y la altura y la base, son lados también.
    this.side = side;
  }
}

class Triangle extends Polygon {
 // Un constructor que recibirá base y altura
  constructor (base, height){
   super(3, base, height);
  }
  // Un método area() que sobrescibirá al de la clase base. (super.area() / 2)
  area(){
   return super.area() /2;
  }
}

// Crearemos dos instancias: un cuadrado de 4 de lado y un triángulo de 4 de base y 3 de altura. Llamaremos a los dos métodos en todas las instancias.

const mySquare = new Square(4,4,4);
const myTriangle = new Triangle(3,4,3);

console.log(`El cuadrado tiene un perimetro de ${mySquare.perimeter()}cm y un área de ${mySquare.area()}cm2`);
console.log(`El triángulo tiene un perimetro de ${myTriangle.perimeter()}cm y un área de ${myTriangle.area()}cm`);

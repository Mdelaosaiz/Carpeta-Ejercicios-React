// En el programa definiremos la clase Square, que tendrá al menos:
class Square {
  // creamos un cosntructor para tener un "side" genérico y guardarlo internamente con los atributos que me den (en este caso, el valor del side)
  constructor (side){
    this.side = side;
  }
  // Un método para calcular el perímetro
  perimeter(){ 
    return this.side*4;
  }
  // Un método para calcular el área 
  area(){
    return this.side **2;
  }
}
// Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
// Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.
const smallSquare = new Square(1);
const mediumSquare = new Square(3);
const largeSquare = new Square (7);

console.log (`The perimeter of this Square is ${smallSquare.perimeter()} cm and the area is ${smallSquare.area()}cm ^2`);

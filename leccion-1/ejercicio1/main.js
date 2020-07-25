//En el programa definiremos la clase Square, que tendrá al menos:

class Square {  
    // Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados)
  perimeter (side){// Los métodos recibirán la longitud del lado (side) como parámetro.
    return side*4;
  }
  // Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
  area(side){
    return side**2;
  }
}
// Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado.
const perimeterSquare = new Square();

console.log(
  `El cuadrado tiene un perimetro de ${perimeterSquare.perimeter(9)}cm`
);

console.log (
  `El cuadrado tiene un area de ${perimeterSquare.area(9)} cm^2`
);
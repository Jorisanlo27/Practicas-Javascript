// • Crea una función que calcule el perímetro de un cuadrado, a partir de su lado. 

// Crea también otra función que calcule la superficie de un cuadrado a partir de su lado. 

// Luego de aceptar los valores para cada lado del cuadrado esta pueda mostrar a través de una página, su perímetro y el área del cuadrado.

var Lado = prompt("introducir el primer lado");

function calcularPerimetro(lado) {
    return lado * 4;
}

function calcularSuperficie(lado) {
    return lado *= lado;
}

document.write(`El perimetro del cuadrado es ${calcularPerimetro(Lado)} y su superficie es ${calcularSuperficie(Lado)}`);
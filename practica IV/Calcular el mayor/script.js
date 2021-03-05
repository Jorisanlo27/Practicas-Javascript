// • Crea una función que calcule el mayor de 3 números. Con ella, se debe permitir que el usuario pueda introducir los tres valores y en una página presente cuál es el mayor de ellos.

var primerNumero = prompt("Introduzca el primer número");

var segundoNumero = prompt("Introduzca el segundo número");

var tercerNumero = prompt("Introduzca el tercer número");


function calcularMayor(n1, n2, n3) {
  return Math.max(n1, n2, n3);
}

document.write(`El mayor entre los tres numeros es ${calcularMayor(primerNumero, segundoNumero, tercerNumero)}`);
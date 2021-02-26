var primerNumero = prompt("Introduzca el primer número");

var segundoNumero = prompt("Introduzca el segundo número");

if (segundoNumero == 0) {
    document.write("No se puede dividir entre cero");
} else {
    document.write(`La division de ${primerNumero} entre ${segundoNumero} = ${primerNumero/segundoNumero}`);

};

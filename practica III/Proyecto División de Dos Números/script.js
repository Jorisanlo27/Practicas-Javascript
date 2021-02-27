// Se requiere que pida al usuario dos números y muestre su división, pero sólo en caso de que el segundo no sea cero; si el segundo es cero, deberá escribir "No se puede dividir entre cero".

var primerNumero = prompt("Introduzca el primer número");

var segundoNumero = prompt("Introduzca el segundo número");

if (segundoNumero == 0) {
    document.write("No se puede dividir entre cero");
} else {
    document.write(`La division de ${primerNumero} entre ${segundoNumero} = ${primerNumero/segundoNumero}`);

};
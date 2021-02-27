// 3. Proyecto Igualdad o Mayor de tres Números. Se requiere que pida al usuario tres números y diga si son iguales o, en caso contrario, cual es el mayor de ellos.

var primerNumero = prompt("introduzca el primer número");

var segundoNumero = prompt("introduzca el segundo número");

var tercerNumero = prompt("introduzca el tercer número");

if (primerNumero == segundoNumero && primerNumero == tercerNumero) {
    document.write(`Todos los números son iguales a ${primerNumero}`);
} else {
    if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
        document.write(`El primer numero es ${mayor} y es el mayor de todos.`);
    } else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
        document.write(`El segundo numero es ${mayor} y es el mayor de todos.`);
    } else {
        document.write(`El tercer numero es ${mayor} y es el mayor de todos.`);

    }
}
// 2. Proyecto Signos de Dos Números. Se requiere que pida al usuario dos números; y diga cuántos y cuáles de ellos son positivos o negativos.

var primerNumero = prompt("introduzca el primer número");

var segundoNumero = prompt("introduzca el segundo número");

if (primerNumero > 0 && segundoNumero > 0) {
    document.write(`Hay 2 numeros positivos: ${primerNumero} y ${segundoNumero}.`);
} else {
    if (primerNumero > 0 && segundoNumero < 0) {
        document.write(`Hay 1 positivo y 1 negativo. <br>El primer número es positivo: "${primerNumero}". <br>Y<br>El segundo es negativo: "${segundoNumero}".`);
    } else if (primerNumero < 0 && segundoNumero > 0) {
        document.write(`Hay 1 negativo y 1 positivo. <br>El primer número es negativo: "${primerNumero}". <br>Y<br>El segundo es positivo: "${segundoNumero}".`);
    } else {
        document.write(`Hay 2 numeros negativos: ${primerNumero} y ${segundoNumero}.`);
    }
}
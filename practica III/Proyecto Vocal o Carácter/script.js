// 4. Proyecto Vocal o Carácter. Se requiere que pida al usuario una letra y diga si ha escrito una vocal o algún otro carácter.

var input = prompt("Introduza una letra");

var vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < vocales.length; i++) {
    if (input == vocales[i]) {
        document.write(`${vocales[i]} es una vocal`);
        break;
    }
    else {
        document.write(`${input} es otro carácter`);
        break;
    }
}
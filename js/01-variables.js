// Esto es un comentario de una linea

/* Esto es un comentario de 
multiples lineas*/

// Declarar una variable (var- let- const)

let anioActual = 2024;
console.log(anioActual)

//Modificamos el contenido de una variable

anioActual = 2024 + 2;
console.log(anioActual);
document.write(anioActual);
document.write("<p class='textoResaltado'> Esto es un documento </p>");
document.write('Año actual: '+ (anioActual - 2));

//ventanas emergentes
//alert('Bienvenido a nuestra pagina Web');

const url = 'https://developer.mozilla.org/es/docs/Web/JavaScript';

document.write('<br>' + url);

//pedir al usuario un numero
const numero1 = parseInt(prompt('ingrese un numero'));
console.log(numero1);
const resultado = numero1 + 20;
console.log(resultado);

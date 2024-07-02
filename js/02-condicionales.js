// Condicionales

/*
if (condicion logica){
todas las lineas que quieran que sucedan si se cumple la comndicion logica
}
*/

// solicitar al usuario ingresar un numero y verificar si es positivo

//const numeroSolicitado = parseInt(prompt('ingrese un numero entero'));

// if (numeroSolicitado > 0){
// document.write(`<p>El numero ingresado: ${numeroSolicitado} es positivo </p>`);
// }else{
//   document.write(`<p>El numero ingresado: ${numeroSolicitado} no es positivo </p>`);
// }

// Cree un programa que solicite al usuario su edad e indique si puede votar o no.

// desde los 16 años hasta 75 años es obligatorio
// si la persona tiene 16 o 17 años es opcional, desde 76 años en adelante tambien es opcional
// menores de 16 años no pueden votar

const edad = parseInt(prompt("Ingrese su edad"));
// AND &&
// OR ||
if (edad >= 18 && edad <= 75) {
  document.write(`<p> Usted esta obligado a votar </p>`);
} else if (edad == 16 || edad == 17 || edad >= 76) {
  //quiero saber si la edad es 16, 17 o mayores e igual a 76
  document.write(`<p> ES opcional Votar </p>`);
}else{
    document.write(`<p> Usted no puede votar</p>`);
}

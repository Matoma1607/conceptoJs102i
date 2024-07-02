// Condicionales 

/*
if (condicion logica){
todas las lineas que quieran que sucedan si se cumple la comndicion logica
}
*/

// solicitar al usuario ingresar un numero y verificar si es positivo

const numeroSolicitado = parseInt(prompt('ingrese un numero entero'));

if (numeroSolicitado > 0){
    document.write(`<p>El numero ingresado: ${numeroSolicitado} es positivo </p>`);
}else{
    document.write(`<p>El numero ingresado: ${numeroSolicitado} no es positivo </p>`);
}
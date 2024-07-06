// Es una estructura repetitiva
// varios tipos de bucles:
// Estructura Wile:

/* Wile (condicion logica){
aqui se agrega todo el codigonque quiero repetir
agregar codigo que haga que la condicion logica se deje de cumplir
}
*/
let renglon = 11;

while (renglon <= 10) {
  document.write(`<p>Renglon numero ${renglon} </p>`);
  renglon++; //renglon = renglon + 1;
}

// Estructura Do-Wile:
/* Do{
aqui se agrega todo el codigonque quiero repetir
agregar codigo que haga que la condicion logica se deje de cumplir
}Wile(condicion logica)
*/

let linea = 1;
do {
  document.write(`<p>Renglon numero ${linea} </p>`);
  linea++;
} while (linea <= 5);

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

// Estructura for:
/* 
for(let variable= 1; variable>10; variable++){
aqui agrego todo el codigo que quiero repetir varias veces
}
*/

for(let contador =10; contador > 0; contador --){
  document.write(`<p>Cuenta regresiva ${contador}</p>`);
}
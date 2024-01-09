//Arrays

const numeros = [20, 5, 6, 10, 200];

console.log(numeros[1]);
console.log(numeros.length);
//numeros.forEach()

numeros.push(80, 70, 90); //añadir números por detrás
numeros.unshift(80, 70, 90); //añadir números por delante
console.log(numeros);
//console.table (formato de tabla)

const mese = ["enero", "febrero", "marzo"];

meses.pop(); //Te quita el último elemento
meses.shift(); //Te quita el primer elemento
console.log(meses);

const nuevoArray = ["enero", ...meses, "marzo"];
console.log(nuevoArray);
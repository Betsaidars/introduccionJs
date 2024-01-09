// Aquí explicamos como van las variables

let producto ="Aufifonos Gamer";
let disponible;

//problemitas que da que el Javascript no esté fuertemente tipado
disponible = true;
console.log(typeof disponible);
disponible = "true";
console.log(typeof disponible)

//más problemas
disponible = 5;
console.log(disponible);
disponible2 = "5";
console.log(disponible);

disponible = disponible + disponible2;
console.log(disponible);

let producto_nuevo = "Ordenadores nuevos", //underscore
    productoNuevo = "dónde están", //camelcase
    ProductoNuevo = "esta es otra variable"; //Pascal Case
console.log(producto1);
//Objetos

const producto = {
    nombre : "pantalla 27'",
    precio : 140,
    caracteristicas : "Es una pantalla con 4k"
}
const medidas = {
    peso : "2kg",
    medidas : "1200x2800"
}
const producto2 = {
    nombre : "torre topegama",
    precio : 1400,
    caracteristicas : "Torre con tarjeta gráfica GEFORCE tope"
}

// producto.imagen = "imagen.jpg";
// console.log(product.nombre);
// console.log(product2.precio);
// console.log(product.imagen);
// console.log(producto);

// nombre  = producto.nombre;
// producto.nombre = "otra cosa"


//destructuring

const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);

//unión de objetos

const nuevoProducto={...producto, ...medidas};
console.log(producto);
console.log(nuevoProducto);





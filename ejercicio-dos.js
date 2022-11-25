//Punto 1
let celular = {
  marca: "Nokia",
  color: "azul",
  precio: 19000,
  anio_creacion: 2003,
  stock: true,
};
console.log(celular.precio);

celular.anio_creacion = 2017;

delete celular.marca;

console.log(Object.keys(celular));

const arrayDeClave = Object.keys(celular);
const arrayDeValores = [];

for (const clave of arrayDeClave) {
  arrayDeValores.push(celular[clave]);
}
console.log(arrayDeValores);

//Punto 2 A
const arreglo = [1, 2, 3, 4];
let arreglo_dos = [...arreglo, 5]; // Spread operator '...'

console.log(arreglo_dos);

//Punto 2 B
let arreglo_tres = arreglo_dos.map((numero) => {
  return numero * 5;
});
console.log(arreglo_tres);

//Punto 3
const person = {
  name: "Pepe",
  age: 26,
  hobbies: ["chess", "running", "basket"],
};

const { name: nombre, age: edad } = person;
console.log(nombre, edad);

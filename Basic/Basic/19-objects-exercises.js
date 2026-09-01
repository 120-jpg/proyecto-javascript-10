/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let telefono = { marca: 'Samsung', almacenamiento: '128GB', ram: '6GB' }
// 2. Accede y muestra su valor
console.log(telefono.marca)
// 3. Agrega una nueva propiedad
telefono.color = 'Negro'
// 4. Elimina una de las 3 primeras propiedades
delete telefono.ram
// 5. Agrega una función e invócala
telefono.llamar = function () {
 return 'Llamando...'
}
console.log(telefono.llamar())
// 6. Itera las propiedades del objeto
for (let prop in telefono) {
 console.log(prop, telefono[prop])
}
// 7. Crea un objeto anidado
let cliente = { id: 77, datos: { ciudad: 'Bucaramanga', activo: true } }
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(cliente.datos.ciudad)
// 9. Comprueba si los dos objetos creados son iguales
let t2 = { marca: 'Samsung', almacenamiento: '128GB' }
console.log(telefono === t2) // false (diferente referencia)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(telefono.almacenamiento === cliente.datos.ciudad) // false

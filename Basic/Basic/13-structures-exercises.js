/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let marcas = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Vans']
// 2. Añade dos más. Uno al principio y otro al final
marcas.unshift('Converse')
marcas.push('Under Armour')
// 3. Elimina el que se encuentra en tercera posición
marcas.splice(2, 1)
// 4. Crea un set que almacene cinco libros
let setLibros = new Set(['El Quijote', 'Hamlet', 'Odisea', 'It', 'Drácula'])
// 5. Añade dos más. Uno de ellos repetido
setLibros.add('Siddhartha')
setLibros.add('It') // Se ignora por duplicado
// 6. Elimina uno concreto a tu elección
setLibros.delete('Hamlet')
// 7. Crea un mapa que asocie el número del mes a su nombre
let mapaMeses = new Map([
 [1, 'Enero'],
 [2, 'Febrero'],
 [3, 'Marzo'],
])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (mapaMeses.has(2)) console.log(mapaMeses.get(2))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapaMeses.set('vacaciones', ['Julio', 'Diciembre'])
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrBase = [5, 5, 10, 15]
let setDesdeArr = new Set(arrBase)
let mapaFinal = new Map()
mapaFinal.set('datosUnicos', setDesdeArr)

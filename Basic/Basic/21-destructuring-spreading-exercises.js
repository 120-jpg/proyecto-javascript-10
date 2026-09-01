/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let nums = [100, 200, 300]
let [primero, segundo] = nums
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [a, b = 99] = [10]
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let { marca, almacenamiento } = telefono
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { marca: brand, almacenamiento: storage } = telefono
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {
 datos: { ciudad },
} = cliente
// 6. Usa propagación para combinar dos arrays en uno nuevo
let arrA = [1, 2]
let arrB = [3, 4]
let union = [...arrA, ...arrB]
// 7. Usa propagación para crear una copia de un array
let copiaArr = [...arrA]
// 8. Usa propagación para combinar dos objetos en uno nuevo
let obj1 = { x: 1 }
let obj2 = { y: 2 }
let unionObj = { ...obj1, ...obj2 }
// 9. Usa propagación para crear una copia de un objeto
let copiaObj = { ...obj1 }
// 10. Combina desestructuración y propagación
let valores = [10, 20, 30, 40]
let [v1, v2, ...resto] = valores

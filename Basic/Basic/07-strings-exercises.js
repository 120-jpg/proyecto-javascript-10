/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let t1 = 'Desarrollo'
let t2 = 'Web'
let completo = t1 + ' ' + t2
console.log(completo)
// 2. Muestra la longitud de una cadena de texto
let asignatura = 'Programación'
console.log(asignatura.length)
// 3. Muestra el primer y último carácter de un string
console.log(asignatura[0])
console.log(asignatura[asignatura.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(asignatura.toUpperCase())
console.log(asignatura.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let multiLinea = `Línea de prueba uno
Línea de prueba dos`
console.log(multiLinea)
// 6. Interpola el valor de una variable en un string
let estudiante = 'Daniel'
let grado = 'Décimo'
console.log(`El estudiante ${estudiante} cursa el grado ${grado}.`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = 'Hola mundo de la programación'
console.log(frase.replace(/ /g, '-'))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes('mundo'))
// 9. Comprueba si dos strings son iguales
console.log('Sistema' === 'Sistema')
// 10. Comprueba si dos strings tienen la misma longitud
console.log('Sol'.length === 'Mar'.length) // true (3 === 3)

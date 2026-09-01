/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 12 + 8
let resta = 30 - 10
let multi = 4 * 5
let div = 100 / 4
let mod = 9 % 2
let exp = 3 ** 3
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let puntaje = 50
puntaje += suma
puntaje -= resta
puntaje *= multi
puntaje /= div
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(20 > 10)
console.log(5 < 15)
console.log(50 >= 50)
console.log(12 <= 20)
console.log('Moto' != 'Auto')
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 30)
console.log(100 < 20)
console.log(10 >= 25)
console.log(40 <= 10)
console.log('10' === 10) // Estricto falso
// 5. Utiliza el operador lógico and
let testAnd = 10 > 5 && 2 < 8
console.log(testAnd) // true
// 6. Utiliza el operador lógico or
let testOr = 3 > 10 || 20 > 15
console.log(testOr) // true
// 7. Combina ambos operadores lógicos
let combo = (5 === 5 && 10 > 2) || 100 < 50
console.log(combo)
// 8. Añade alguna negación
let negado = !(5 > 10) // true
console.log(negado)
// 9. Utiliza el operador ternario
let calificacion = 4.5
let resultado = calificacion >= 3.0 ? 'Aprobado' : 'Reprobado'
console.log(resultado)
// 10. Combina operadores aritméticos, de comparáción y lógicas
let complejo = 10 + 5 > 12 && 20 - 5 === 15
console.log(complejo)

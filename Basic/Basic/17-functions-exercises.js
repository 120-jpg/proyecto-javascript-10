/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const multiplicarNums = (x, y) => x * y
console.log(multiplicarNums(4, 5))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function hallarMenor(arr) {
 return Math.min(...arr)
}
console.log(hallarMenor([10, 4, 22, 8]))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarV(t) {
 return t.split('').filter((c) => 'aeiou'.includes(c.toLowerCase())).length
}
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function toUpperArr(arr) {
 return arr.map((s) => s.toUpperCase())
}
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function checarPrimo(n) {
 if (n < 2) return false
 for (let i = 2; i < n; i++) {
  if (n % i === 0) return false
 }
 return true
}
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function comunes(a, b) {
 return a.filter((item) => b.includes(item))
}
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(arr) {
 let s = 0
 for (let n of arr) {
  if (n % 2 === 0) s += n
 }
 return s
}
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cubo(arr) {
 return arr.map((n) => n ** 3)
}
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function revPalabras(t) {
 return t.split(' ').reverse().join(' ')
}
// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
 let f = 1
 for (let i = 1; i <= n; i++) f *= i
 return f
}

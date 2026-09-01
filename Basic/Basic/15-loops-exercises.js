/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 10; i++) {
 console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sumaTotal = 0
for (let i = 1; i <= 50; i++) {
 sumaTotal += i
}
console.log(sumaTotal)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 20; i++) {
 if (i % 2 === 0) console.log(i)
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let equipo = ['Andrés', 'Camila', 'Daniel', 'Sofia']
for (let n of equipo) {
 console.log(n)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let textoStr = 'Desarrollo de software'
let count = 0
for (let letra of textoStr.toLowerCase()) {
 if ('aeiou'.includes(letra)) count++
}
console.log(count)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let nums = [2, 3, 4]
let prod = 1
for (let n of nums) {
 prod *= n
}
console.log(prod)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
 console.log(`3 x ${i} = ${3 * i}`)
}
// 8. Usa un bucle para invertir una cadena de texto
let original = 'SENA'
let invertido = ''
for (let i = original.length - 1; i >= 0; i--) {
 invertido += original[i]
}
console.log(invertido)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1]
for (let i = 2; i < 5; i++) {
 fib[i] = fib[i - 1] + fib[i - 2]
}
console.log(fib)
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let lista = [2, 8, 4, 10, 1]
let mayores = []
for (let x of lista) {
 if (x > 5) mayores.push(x)
}
console.log(mayores)

/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombreUser = 'Daniel'
if (nombreUser === 'Daniel') {
 console.log('Daniel')
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = 'admin'
let pass = '1234'
if (user === 'admin' && pass === '1234') {
 console.log('Acceso concedido')
} else {
 console.log('Acceso denegado')
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numVal = 8
if (numVal > 0) console.log('Positivo')
else if (numVal < 0) console.log('Negativo')
else console.log('Cero')
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16
if (edad >= 18) {
 console.log('Es mayor de edad')
} else {
 console.log(`Es menor. Le faltan ${18 - edad} años.`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let categoria = edad >= 18 ? 'adulto' : 'menor'
console.log(categoria)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let estacionMes = 'Julio'
if (estacionMes === 'Diciembre' || estacionMes === 'Enero')
 console.log('Invierno')
else if (estacionMes === 'Julio' || estacionMes === 'Agosto')
 console.log('Verano')
else console.log('Otra temporada')
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
if (estacionMes === 'Abril' || estacionMes === 'Junio') console.log('30 días')
else console.log('31 días o variable diferente')
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let lang = 'es'
switch (lang) {
 case 'es':
  console.log('Hola')
  break
 case 'en':
  console.log('Hello')
  break
 default:
  console.log('Desconocido')
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (estacionMes) {
 case 'Julio':
 case 'Agosto':
  console.log('Verano')
  break
 default:
  console.log('Otro mes')
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (estacionMes) {
 case 'Abril':
  console.log('30 días')
  break
 case 'Julio':
  console.log('31 días')
  break
 default:
  console.log('Revisar mes')
}

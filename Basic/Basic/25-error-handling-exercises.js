/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
 undefinedFunction()
} catch (e) {
 console.log('Error controlado')
}
// 2. Captura una excepción utilizando try-catch y finally
try {
 throw new Error('Fallo')
} catch (e) {
 console.log(e.message)
} finally {
 console.log('Bloque final ejecutado')
}
// 3. Lanza una excepción genérica
throw new Error('Error generado a mano')
// 4. Crea una excepción personalizada
class CustomError extends Error {
 constructor(msg) {
  super(msg)
  this.name = 'CustomError'
 }
}
// 5. Lanza una excepción personalizada
try {
 throw new CustomError('Algo salió mal')
} catch (e) {
 console.log(e.name)
}
// 6. Lanza varias excepciones según una lógica definida
function comprobar(val) {
 if (typeof val !== 'number') throw new TypeError('Debe ser número')
}
// 7. Captura varias excepciones en un mismo try-catch
try {
 comprobar('texto')
} catch (e) {
 if (e instanceof TypeError) console.log('Es TypeError')
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
for (let item of ['12.5', 'abc', '9.1']) {
 try {
  let n = parseFloat(item)
  if (isNaN(n)) throw new Error('No es número')
 } catch (e) {
  console.log(e.message)
 }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function checkProp(obj, prop) {
 if (!(prop in obj)) throw new Error('Falta la propiedad')
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
let intentos = 0
while (intentos < 5) {
 try {
  intentos++
  throw new Error()
 } catch (e) {
  if (intentos === 5) console.log('Límite alcanzado')
 }
}

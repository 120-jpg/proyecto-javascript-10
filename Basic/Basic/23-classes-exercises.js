/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Vehiculo {
 constructor(tipo, modelo) {
  this.tipo = tipo
  this.modelo = modelo
 }
}
// 2. Añade un método a la clase que utilice las propiedades
class Vehiculo {
 constructor(tipo, modelo) {
  this.tipo = tipo
  this.modelo = modelo
 }
 detalles() {
  return `${this.tipo} modelo ${this.modelo}`
 }
}
// 3. Muestra los valores de las propiedades e invoca a la función
let v = new Vehiculo('Moto', 2023)
console.log(v.detalles())
// 4. Añade un método estático a la primera clase
class Utilidades {
 static version() {
  return 'v1.0'
 }
}
// 5. Haz uso del método estático
console.log(Utilidades.version())
// 6. Crea una clase que haga uso de herencia
class Bicicleta extends Vehiculo {
 pedalear() {
  return 'Avanzando con pedales'
 }
}
// 7. Crea una clase que haga uso de getters y setters
class Cuadrado {
 constructor(lado) {
  this._lado = lado
 }
 get area() {
  return this._lado ** 2
 }
 set nuevoLado(l) {
  this._lado = l
 }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Secreto {
 #codigo = 9999
 get verCodigo() {
  return this.#codigo
 }
}
// 9. Utiliza los get y set y muestra sus valores
let c = new Cuadrado(4)
console.log(c.area)
c.nuevoLado = 6
console.log(c.area)
// 10. Sobrescribe un método de una clase que utilice herencia
class Moto extends Vehiculo {
 detalles() {
  return `Es una motocicleta tipo ${this.tipo}`
 }
}

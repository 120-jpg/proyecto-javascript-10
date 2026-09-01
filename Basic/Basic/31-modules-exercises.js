/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function calcularAreaCuadrado(lado) {
 return lado * lado
}
// 2. Exporta una constante
export const IMPUESTO_IVA = 0.19
// 3. Exporta una clase
export class Factura {
 constructor(numero, total) {
  this.numero = numero
  this.total = total
 }
}
// 4. Importa una función
import { calcularAreaCuadrado } from './calculos.js'

console.log(calcularAreaCuadrado(5)) // 25
// 5. Importa una constante
import { IMPUESTO_IVA } from './config.js'

console.log(IMPUESTO_IVA) // 0.19
// 6. Importa una clase
import { Factura } from './facturacion.js'

let miFactura = new Factura(1001, 500)
console.log(miFactura.numero) // 1001
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
const TASA_INTERES = 0.05
function calcularInteres(monto) {
 return monto * TASA_INTERES
}
class Banco {}

export default {
 TASA_INTERES,
 calcularInteres,
 Banco,
}
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import datosBanco from './banco.js'

// Usándolos a través del objeto importado por defecto:
console.log(datosBanco.TASA_INTERES)
console.log(datosBanco.calcularInteres(1000))
// 9. Exporta una función, una constante y una clase desde una carpeta
export function formatearMoneda(valor) {
 return `$${valor}`
}
export const MONEDA_OFICIAL = 'COP'
export class Transaccion {}
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import {
 formatearMoneda,
 MONEDA_OFICIAL,
 Transaccion,
} from '../utils/helpers.js'

console.log(formatearMoneda(50000) + ' ' + MONEDA_OFICIAL)

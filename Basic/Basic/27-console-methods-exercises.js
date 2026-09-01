/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function mostrarErrorCritico() {
 console.error('¡Error crítico: No se pudo conectar a la base de datos!')
}
mostrarErrorCritico()
// 2. Crea una función que utilice warn correctamente
function mostrarAdvertenciaSistema() {
 console.warn('Advertencia: El espacio en disco está por agotarse.')
}
mostrarAdvertenciaSistema()
// 3. Crea una función que utilice info correctamente
function mostrarInfoProceso() {
 console.info('Información: La sincronización de datos finalizó con éxito.')
}
mostrarInfoProceso()
// 4. Utiliza table
let productosStock = [
 { id: 101, producto: 'Teclado Mecánico', precio: 45.0 },
 { id: 102, producto: 'Mouse Gamer', precio: 25.5 },
 { id: 103, producto: 'Monitor 24 pulgadas', precio: 150.0 },
]
console.table(productosStock)
// 5. Utiliza group
console.group('Configuración de Red')
console.log('IP: 192.168.1.50')
console.log('Máscara de subred: 255.255.255.0')
console.log('Estado: Conectado')
console.groupEnd()
// 6. Utiliza time
console.time('Cronómetro de Bucle')

let acumulador = 0
for (let i = 0; i < 2000000; i++) {
 acumulador += i
}

console.timeEnd('Cronómetro de Bucle')
// 7. Valida con assert si un número es positivo
let stockActual = -3
console.assert(
 stockActual >= 0,
 'Alerta: El stock no puede ser negativo (' + stockActual + ')',
)
// 8. Utiliza count
function registrarVisita() {
 console.count('Veces que se ha pulsado el botón')
}

registrarVisita()
registrarVisita()
registrarVisita()
// 9. Utiliza trace
function funcionInterna() {
 console.trace('Seguimiento de la pila de llamadas (Trace)')
}
function funcionIntermedia() {
 funcionInterna()
}
function funcionPrincipal() {
 funcionIntermedia()
}

funcionPrincipal()
// 10. Utiliza clear
// Limpia la consola por completo
console.clear()
console.log('La consola ha sido limpiada correctamente.')

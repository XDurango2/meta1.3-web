// Archivo principal - CommonJS
const calculadora = require('./calculadora.cjs');
const conversor = require('./conversor.cjs');

console.log("🧪 PRUEBA DE MÓDULOS COMMONJS\n");
console.log("=".repeat(50));

// Usar calculadora
console.log("📐 CALCULADORA:");
console.log(`5 + 3 = ${calculadora.sumar(5, 3)}`);
console.log(`10 - 4 = ${calculadora.restar(10, 4)}`);
console.log(`7 * 6 = ${calculadora.multiplicar(7, 6)}`);
console.log(`20 / 5 = ${calculadora.dividir(20, 5)}`);
console.log(`2^8 = ${calculadora.potencia(2, 8)}`);
console.log(`√81 = ${calculadora.raiz(81)}`);

console.log("\n" + "=".repeat(50));

// Usar conversor
console.log("🔄 CONVERSOR:");
console.log(`100 cm a m = ${conversor.longitud(100, 'cm', 'm')} m`);
console.log(`5 km a m = ${conversor.longitud(5, 'km', 'm')} m`);
console.log(`10 pulgadas a cm = ${conversor.longitud(10, 'pulgada', 'cm')} cm`);
console.log(`25°C a °F = ${conversor.celsiusAFahrenheit(25)}°F`);
console.log(`0°C a K = ${conversor.celsiusAKelvin(0)}K`);

console.log("\n" + "=".repeat(50));

// Mostrar metadata
console.log("📦 INFO DE MÓDULOS:");
console.log(`Versión calculadora: ${calculadora.version}`);
console.log(`Unidades disponibles: ${conversor.unidadesDisponibles().join(', ')}`);

// Demostración de require dinámico
console.log("\n" + "=".repeat(50));
console.log("🔄 REQUIRE DINÁMICO:");

const modulo = process.argv[2] === 'calc' ? './calculadora.cjs' : './conversor.cjs';
const moduloCargado = require(modulo);
console.log(`Módulo cargado: ${modulo}`);
console.log(`Exportaciones: ${Object.keys(moduloCargado).join(', ')}`);

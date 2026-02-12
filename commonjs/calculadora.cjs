const { raiz } = require("../navegador/calculadora");

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
}// También se puede exportar individualmente
function potencia(a, b){
    return Math.pow(a, b);
}
//function raiz  (a) {
 //   return Math.sqrt(a);
//}

// Exportación múltiple
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    potencia,
    raiz,
    version: "1.0.0"
};



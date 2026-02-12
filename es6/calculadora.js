// Módulo ES6 con exportaciones nombradas y por defecto

// Exportaciones nombradas
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
}

// Exportación nombrada adicional
export const version = "2.0.0";

// Exportación por defecto (puede ser función, objeto, clase)
export default class CalculadoraAvanzada {
    static potencia(a, b) {
        return Math.pow(a, b);
    }
    
    static raiz(a) {
        return Math.sqrt(a);
    }
    
    static porcentaje(valor, porcentaje) {
        return (valor * porcentaje) / 100;
    }
}

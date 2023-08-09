export function addNumber(a: number, b: number): number {
    return a + b;
}

export function substractNumber(a: number, b: number): number {
    return a - b;
}
//tarea tabla de multiplicar
export function tableNumber(limit: number, base: number): void {
    let auxiliar: number;
    if (limit <= 0) {
        console.log("El numero que ingresaste lo pasamos a positivo");
        auxiliar = limit * -1;
        limit = auxiliar;
    }
    for (let i = 1; i <= limit; i++) {
        console.log(base, 'x', i, '=', base * i);
    }
}

export function timesNumber(a: number, b: number): number {
    return a * b;
}

export function divideNumber(a: number, b: number): number {
    return a / b;
}
export function add(num01: number, num02: number): number {
    if(num01 === null || num02 === null){
        throw new Error("Entrada de dados invalida");
    }

    return num01 + num02;
}

export function sub(num01: number, num02: number): number {
    return num01 - num02;
}

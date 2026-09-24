import {add, sub} from "../src/calc"
import {describe, test, expect,} from "vitest"

describe('Função de soma', () => {
    test('deve somar dois valores numericos inteiros corretamente', () => {
        expect(add(0, 0)).toBe(0);
    })

    test('deve somar dois valores numericos decimais incorretamente', () => {
        expect(add(2.5, 1)).toBe(3.5);
    })

})

describe('Função de subtracao', () => {
    test('Deve subtrair dois valores numericos inteiros corretamente', () => {
        expect(sub(2, 1)).toBe(1);
    })

    test('Deve subtrair dois valores numericos decimais corretamente', () => {
        expect(sub(2.5, 1.5)).toBe(1);
    })
})
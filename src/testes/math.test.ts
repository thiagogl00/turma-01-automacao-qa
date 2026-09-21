import { expect, test , describe} from 'vitest'

describe('Calcular raiz quadrada de um número',()=>{
    test("Retornar raiz quadrada de um número perfeito",()=>{
        expect(Math.sqrt(4)).toBe(2)
        expect(Math.sqrt(9)).toBe(3)
    });
    test("Retornar um NAN se o numero for negativo",()=>{
        expect(Math.sqrt(-4)).toBeNaN()
    });
    test("Retornar 0 se for passado um 0",()=>{
        expect(Math.sqrt(0)).toBe(0)
    });
})


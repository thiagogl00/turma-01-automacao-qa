import { expect, test, describe } from "vitest";

function login(username:string,password:string):boolean{
    return username === 'thiago' && password === '12345678';
}

test('Permitir fazer login com credênciais válidas',()=>{
    const efetuandoLogin = login('thiago','12345678')
    expect(efetuandoLogin).toBe(true)
});

describe('Negar login com credênciais inválidas',()=>{
    test('Negar login com senha incorreta',()=>{
        const efetuandoLogin = login('thiago','123')
        expect(efetuandoLogin).toBe(false)
    });
    test('Negar login com usuário incorreto',()=>{
        const efetuandoLogin = login('yuji','12345678')
        expect(efetuandoLogin).toBe(false)
    });
    test('Negar login com senha e usuário incorreto',()=>{
        const efetuandoLogin = login('yuji','123')
        expect(efetuandoLogin).toBe(false)
    });
    test('Negar login com campos vazios',()=>{
        const efetuandoLogin = login('','') 
        expect(efetuandoLogin).toBe(false)
    });
})
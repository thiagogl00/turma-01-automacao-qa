import { expect, test } from "vitest";

interface User{
    nome: string,
    idade:number
};

function createUser(nome:string,idade:number):User{
    return {nome,idade}
}

test("Criar um usúario com nome e idade",()=>{
    const user = createUser('Thiago',26)
    expect(user).toEqual({nome:'Thiago',idade:26})
    expect(user.nome).toStrictEqual('Thiago')

});
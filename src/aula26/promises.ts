import {resolve} from "node:dns";

function buscarNome(): Promise<string>{
    // A Promise representa um resultado que será entregue no futuro.
    return new Promise((resolve)=>{
        // Simula uma operação demorada, como uma chamada de rede.
        setTimeout(()=>{
            // resolve entrega o nome e libera o await que está aguardando a Promise.
            resolve("Juan");
        }, 4000);
    });
}

async function executar(){
    console.log("Início do programa...");
    // await pausa esta função até buscarNome() terminar, sem bloquear o restante do processo.
    const nome = await buscarNome();
    console.log(nome);
    console.log("Fim do programa.");
}

executar();

function delay(ms: number): Promise<void> {
    // Cria uma Promise que só é resolvida depois do tempo informado.
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function buscarUsuario(id: number): Promise<string>{
    // A função aguarda a resposta simulada antes de montar o resultado.
    await delay(5000); // simula chamada de rede
    return `Usuário #${id}`;
}

console.log("Início do programa...");
// O código continua daqui somente quando buscarUsuario() resolver a Promise.
const nome = await buscarUsuario(42);
console.log(nome);
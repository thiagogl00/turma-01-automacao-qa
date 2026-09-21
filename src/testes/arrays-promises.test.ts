import {describe, expect, test} from "vitest";

interface ExecucaoTeste {
    id: number;
    nome: string;
    passou: boolean;
    duracaoMs: number;
}

const execucoes: ExecucaoTeste[] = [
    {id: 1, nome: "login", passou: true, duracaoMs: 120},
    {id: 2, nome: "cadastro", passou: false, duracaoMs: 250},
    {id: 3, nome: "busca de produto", passou: true, duracaoMs: 180},
    {id: 4, nome: "logout", passou: true, duracaoMs: 90},
    {id: 5, nome: "checkout", passou: false, duracaoMs: 310},
];

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function buscarExecucaoPorId(id: number): Promise<ExecucaoTeste> {
    await delay(10);

    const execucao = execucoes.find((item) => item.id === id);
    if (!execucao) {
        throw new Error(`Execução ${id} não encontrada`);
    }

    return execucao;
}

describe("Manipulação de execuções de teste", () => {
    test("aplica map, filter e reduce ao array tipado", () => {
        const nomes = execucoes.map((execucao) => execucao.nome);
        const execucoesComSucesso = execucoes.filter((execucao) => execucao.passou);
        const duracaoTotal = execucoes.reduce(
            (total, execucao) => total + execucao.duracaoMs,
            0,
        );

        expect(nomes).toHaveLength(5);
        expect(execucoesComSucesso).toHaveLength(3);
        expect(duracaoTotal).toBe(950);
    });
});

describe("Busca assíncrona de execuções", () => {
    test("retorna a execução quando o id existe", async () => {
        await expect(buscarExecucaoPorId(3)).resolves.toEqual({
            id: 3,
            nome: "busca de produto",
            passou: true,
            duracaoMs: 180,
        });
    });

    test("lança erro quando o id não existe", async () => {
        await expect(buscarExecucaoPorId(99)).rejects.toThrow(
            "Execução 99 não encontrada",
        );
    });
});
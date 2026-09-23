import { afterEach, describe, expect, test, vi } from "vitest";
import {
    atualizarPostagemCompleta,
    atualizarPostagemParcialmente,
    deletar,
} from "./api.js";

// api.ts imprime o status em vez de retorná-lo; o spy permite validá-lo sem poluir a saída dos testes.
const statusLog = (consoleSpy: ReturnType<typeof vi.spyOn>): void => {
    expect(consoleSpy).toHaveBeenCalledWith(200);
};

describe("Integracao com o JSONPlaceholder", () => {
    afterEach(() => {
        // Cada teste recebe um console original, sem interferência dos spies anteriores.
        vi.restoreAllMocks();
    });

    test("PUT atualiza uma postagem e retorna o corpo", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

        // PUT substitui a postagem e deve devolver todos os campos enviados.
        const corpoRecebido = await atualizarPostagemCompleta(1);

        statusLog(consoleSpy);
        expect(corpoRecebido).toEqual({
            id: 1,
            userId: 2,
            title: "Atualização de postagem com PUT",
            body: "Aqui tem uma nova descricao para a postagem",
        });
    });

    test("PATCH atualiza parcialmente uma postagem e retorna o corpo", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

        // PATCH altera somente o titulo; os campos principais da resposta são conferidos.
        const corpoRecebido = await atualizarPostagemParcialmente(1);

        statusLog(consoleSpy);
        expect(corpoRecebido).toMatchObject({
            id: 1,
            title: "Atualização de postagem com PATCH",
        });
    });

    test("DELETE exclui uma postagem e retorna status 200", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

        // A funcao deletar nao retorna corpo, por isso o contrato esperado e undefined.
        const corpoRecebido = await deletar(1);

        statusLog(consoleSpy);
        expect(corpoRecebido).toBeUndefined();
    });
});

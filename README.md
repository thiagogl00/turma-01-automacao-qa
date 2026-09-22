# Automação QA

Este projeto reúne exercícios de TypeScript para automação de testes, com exemplos de condicionais, loops, funções, tipos, promises e atividades práticas.

## Requisitos

- Node.js
- npm

## Instalação

```bash
npm install
```

## Como rodar cada arquivo

### Aula 25

```bash
npm run dev:condicionais
```
Executa: `src/aula25/condicionais.ts`

```bash
npm run dev:contandoResultados
```
Executa: `src/aula25/contandoResultados.ts`

```bash
npm run dev:loops
```
Executa: `src/aula25/loops.ts`

```bash
npm run dev:tiposPrimitivos
```
Executa: `src/aula25/tiposPrimitivos.ts`

### Aula 26

```bash
npm run dev:funcoes
```
Executa: `src/aula26/funcoes.ts`

```bash
npm run dev:types
```
Executa: `src/aula26/types.ts`

```bash
npm run dev:promises
```
Executa: `src/aula26/promises.ts`

### Atividades

```bash
npm run dev:automatizaveis
```
Executa: `src/atividades/automatizaveis.ts`

```bash
npm run dev:casosdeteste
```
Executa: `src/atividades/casos-de-teste.ts`

## Verificação de tipos

```bash
npm run type-check
```

Esse comando valida a tipagem do projeto com TypeScript sem gerar build.

## Execução direta com tsx

Também é possível executar qualquer arquivo diretamente:

```bash
npx tsx src/aula25/condicionais.ts
npx tsx src/atividades/casos-de-teste.ts
```

### Testes

Os testes automatizados ficam em `src/testes` e são executados com Vitest:

```bash
npm test
```

Executa todos os arquivos de teste:

- `src/testes/createUser.test.ts`
- `src/testes/login.test.ts`
- `src/testes/math.test.ts`
- `src/testes/soma.test.ts`
- `src/testes/arrays-promises.test.ts`

Para executar apenas um arquivo de teste:

```bash
npx vitest run src/testes/arrays-promises.test.ts
```

Para executar os testes em modo de observação:

```bash
npm test
```
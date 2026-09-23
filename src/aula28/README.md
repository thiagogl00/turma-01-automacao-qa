# Aula 28 - APIs com fetch

As chamadas abaixo foram executadas com `npx tsx src/aula28/apis.ts` em 23/09/2026.
Os exemplos de response foram copiados da execucao real. No `GET /posts`, que retorna
100 registros, foi incluido o primeiro item como amostra.

## 1. GET /posts

### Request

- Metodo: `GET`
- URL: `https://jsonplaceholder.typicode.com/posts`
- Headers: nenhum (`{}`)
- Corpo: nenhum

### Response

- Status code obtido: `200`
- Campos do corpo: array de posts; cada item possui `userId`, `id`, `title` e `body`.

Exemplo real:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

Finalidade: lista todos os posts disponíveis na API. Pode ser usado para montar uma
listagem ou obter dados para uma consulta geral.

## 2. GET /posts/1

### Request

- Metodo: `GET`
- URL: `https://jsonplaceholder.typicode.com/posts/1`
- Headers: nenhum (`{}`)
- Corpo: nenhum

### Response

- Status code obtido: `200`
- Campos do corpo: `userId`, `id`, `title` e `body`.

Exemplo real:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

Finalidade: consulta um post especifico pelo identificador `1`, retornando seus dados
detalhados para uma tela ou operacao individual.

## 3. GET /posts/1/comments

### Request

- Metodo: `GET`
- URL: `https://jsonplaceholder.typicode.com/posts/1/comments`
- Headers: nenhum (`{}`)
- Corpo: nenhum

### Response

- Status code obtido: `200`
- Campos do corpo: array de comentarios; cada item possui `postId`, `id`, `name`,
  `email` e `body`.

Exemplo real:

```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}
```

Finalidade: busca os comentarios relacionados ao post `1`. Serve para exibir a
conversa ou as respostas associadas a um post.

## 4. POST /posts

### Request

- Metodo: `POST`
- URL: `https://jsonplaceholder.typicode.com/posts`
- Headers: `Content-Type: application/json; charset=UTF-8`
- Corpo enviado:

```json
{
  "userId": 1,
  "title": "Aula 28 - APIs",
  "body": "Exemplo de criacao de post com fetch"
}
```

### Response

- Status code obtido: `201`
- Campos do corpo: `userId`, `title`, `body` e `id`.

Exemplo real:

```json
{
  "userId": 1,
  "title": "Aula 28 - APIs",
  "body": "Exemplo de criacao de post com fetch",
  "id": 101
}
```

Finalidade: envia um novo post para a API. O JSONPlaceholder simula a criacao e
retorna o registro com o identificador gerado, sem persistir a alteracao de forma real.
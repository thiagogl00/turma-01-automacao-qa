export type Post = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};

const baseUrl = "https://jsonplaceholder.typicode.com";

async function executar(): Promise<void> {
  const leituras: Array<[string, string]> = [
    ["GET /posts", `${baseUrl}/posts`],
    ["GET /posts/1", `${baseUrl}/posts/1`],
    ["GET /posts/1/comments", `${baseUrl}/posts/1/comments`],
  ];

  for (const [nome, url] of leituras) {
    const response = await fetch(url);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(`${nome} falhou com status ${response.status}`);
    }

    console.log(JSON.stringify({
      endpoint: nome,
      request: {method: "GET", url, headers: {}},
      response: {status: response.status, body},
    }, null, 2));
  }

  const post: Post = {
    userId: 1,
    title: "Aula 28 - APIs",
    body: "Exemplo de criacao de post com fetch",
  };
  const postUrl = `${baseUrl}/posts`;
  const postResponse = await fetch(postUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json; charset=UTF-8"},
    body: JSON.stringify(post),
  });
  const createdPost = await postResponse.json() as Post;

  if (postResponse.status !== 201) {
    throw new Error(`POST /posts falhou com status ${postResponse.status}`);
  }

  console.log(JSON.stringify({
    endpoint: "POST /posts",
    request: {method: "POST", url: postUrl, headers: {"Content-Type": "application/json; charset=UTF-8"}, body: post},
    response: {status: postResponse.status, body: createdPost},
  }, null, 2));
}

executar().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
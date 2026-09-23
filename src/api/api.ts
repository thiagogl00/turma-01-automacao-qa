export interface Postagem {
    id: number,
    title:string,
    body:string
}

//GET: Buscar postagem especifica
export async function buscarPostagem(id: number):Promise<Postagem>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log('STATUS:')
    console.log(res.status)

    const resget = await res.json() as Promise<Postagem>;
    return resget;
}

//const get = await buscarPostagem(1);

//console.log(get);

//console.log(get.title);


//GET: Buscar todas as postagens
export async function buscarPostagemEspecifica():Promise<Postagem>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
    );

    console.log('STATUS:')
    console.log(res.status)

    const resget = await res.json() as Promise<Postagem>;
    return resget;
}

//const get = await buscarPostagemEspecifica();

//console.log(get);


//GET: Buscar um comentario especifico
export async function buscarComentario(id:number):Promise<Postagem>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    console.log('STATUS:')
    console.log(res.status)

    const resget = await res.json() as Promise<Postagem>;
    return resget;
}

//const get = await buscarComentario(1);

//console.log(get);
 

//Post: Cria uma nova postagem
export async function criarPostagem():Promise<Postagem>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,{
            method:'POST',
            headers:{
                'Content-Type': "application/json", 
                'charset':'UTF-8'
            },
            body: JSON.stringify({
                "userId": 1,
                "title": "Aula 28 - APIs",
                "body": "Exemplo de criacao de post com fetch"
            }),
        });

    console.log('STATUS:')
    console.log(res.status)

    const resPost = await res.json() as Promise<Postagem>;
    return resPost;
}

//const post = await criarPostagem();

//console.log(post)
 

//PUT: Atualiza uma postagem completa
export async function atualizarPostagemCompleta(id:number):Promise<Postagem>{
    const corpoEnviado = {
        "userId": 2,
        "title": "Atualização de postagem com PUT",
        "body": "Aqui tem uma nova descricao para a postagem"
    }
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': "application/json", 
                'charset':'UTF-8'
            },
            body: JSON.stringify(corpoEnviado),
        });
        
        console.log('CORPO ENVIADO:\n', corpoEnviado)
        console.log('STATUS:')
        console.log(res.status)

        console.log('CORPO RECEBIDO:')        

        const resPut = await res.json() as Promise<Postagem>;
        return resPut;
    }

    //const put = await atualizarPostagemCompleta(1);

    //console.log(put)

//DELETE: Exclui uma postagem
export async function deletar(id:number):Promise<void>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE',
        });
    console.log('STATUS:')
    console.log(res.status)
 }

//deletar(1); 


    //PATCH: Atualiza uma postagem parcialmente
export async function atualizarPostagemParcialmente(id:number):Promise<Postagem>{
    const corpoEnviado = {
        "title": "Atualização de postagem com PATCH"
    }
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type': "application/json", 
                'charset':'UTF-8'
            },
            body: JSON.stringify(corpoEnviado),
        });
        console.log('CORPO ENVIADO:\n', corpoEnviado)
        console.log('STATUS:')
        console.log(res.status)

        console.log('CORPO RECEBIDO:')        

        const resPatch = await res.json() as Promise<Postagem>;
        return resPatch;
    }

    //const patch = await atualizarPostagemParcialmente(1);

    //console.log(patch);
    //console.log(patch.title);
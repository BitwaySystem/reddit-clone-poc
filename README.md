# Reddit Clone Poc API

Executar a aplicação
```sh
npm run dev
```

## Paths - Autores

| Função | Caminho |
| ------ | ------ |
| GET | /api/autores |
| GET | /api/autores?nomeCompleto="string" |
| POST | /api/autores |

### Buscando todos os autor
> GET /api/autores

### Buscando um autor pelo nome completo
> GET /api/autores?nomeCompleto="id"
  
### Criação de um novo autor
> POST /api/autores
```sh
{
    "nomeCompleto" : "string"
}
```

## Paths - Mensagens

| Função | Caminho |
| ------ | ------ |
| GET | /mensagens |
| GET | /mensagens?titulo="string" |
| POST | /mensagens |
| DELETE | /mensagens/"id" |
| PUT | /mensagens/"id" |
| PATCH | /mensagens/upvote/"id" |
| PATCH | /mensagens/downvote/"id" |
  
### Buscando todas as mensagens
> GET /api/mensagens

### Buscando um mensagens pelo título
> GET /api/mensagens?titulo="titulo"
  
### Criação de uma nova mensagem
> POST /api/mensagens
```sh
{
    "autor" : "autor uuid",
    "titulo" : "string",
    "texto" : "string"
}
```
  
### Deleta uma mensagem por id
> DELETE /api/mensagens/"uuid"
  
### Put uma mensagem por id
> PUT /api/mensagens/"uuid"
```sh
{
    "autor" : "autor uuid",
    "titulo" : "string",
    "texto" : "string"
}
```
  
### Patch uma mensagem por id para dar um voto a mais em um post
> PATCH /api/mensagens/upvote/"uuid"
  
### Patch uma mensagem por id para dar um voto a menos em um post
> PATCH /api/mensagens/downvote/"uuid"  

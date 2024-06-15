# Chuck Norris Jokes API

Este projeto implementa uma API em Node.js que integra com a API do Chuck Norris para fornecer piadas sobre Chuck Norris. Além disso, registra logs das consultas em um arquivo CSV e permite a leitura dos logs com filtragem por data.

## 🚀 Requisitos

- Node.js instalado (v12 ou superior)
- npm ou yarn

## 🚀 Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/Lmicael/API-Chuck-Norris

2. **Instalar as dependências:**

    Com npm ou yarn:
    ```bash
    npm install
    yarn install

3. **Execução**

    Com npm ou yarn:
    ```bash
    node app.js

## 🚀 Rotas Disponíveis

### GET /api/jokes/random
Retorna uma piada aleatória do Chuck Norris.

### GET /api/jokes/search?query=termo
Retorna piadas do Chuck Norris que contenham o termo especificado.

### GET /api/logs
Retorna uma lista de todos os logs das consultas em formato JSON.

### GET /api/logs?startDate=2024-06-14&endDate=2024-06-16
Retorna uma lista de logs das consultas em formato JSON, filtrar por data:.

### Parâmetros:
- query (Obrigatório): Retorna uma piada com o termo informado (string). 
- startDate (Opcional): Filtra logs a partir dessa data (YYYY-MM-DD).
- endDate (Opcional): Filtra logs até essa data (YYYY-MM-DD).

## 🚀 Exemplos

### GET /api/jokes/random

Retorna:

```json
{
  "joke": "Chuck Norris can divide by zero."
}
```

### GET /api/jokes/search?query=roundhouse
Retorna:

```json
{
    "joke": "Chuck Norris can execute a roundhouse kick in a telephone booth!"
}
```

### GET /api/logs
Retorna:

```json
[
    {
        "timestamp": "2024-06-14 17:42:21",
        "type": "random",
        "query": "",
        "joke": "Chuck Norris won the Tour De France on a stationary bike."
    },
    {
        "timestamp": "2024-06-14 17:43:17",
        "type": "search",
        "query": "telephone",
        "joke": "Chuck Norris can execute a roundhouse kick in a telephone booth!"
    },
    {
        "timestamp": "2024-06-14 19:47:58",
        "type": "search",
        "query": "happy",
        "joke": "Chuck Norris gets a happy ending when strangling mountain lions."
    },
    {
        "timestamp": "2024-06-14 19:41:35",
        "type": "random",
        "query": "",
        "joke": "When God walked in the sea ... Chuck Norris was swimming in the land!!"
    }
]
```

### GET /api/logs?startDate=2024-06-14&endDate=2024-06-16
Retorna:

```json
[
    {
        "timestamp": "2024-06-14 20:01:06",
        "type": "search",
        "query": "happy",
        "joke": "Chuck Norris gets a happy ending when strangling mountain lions."
    },
    {
        "timestamp": "2024-06-14 20:01:33",
        "type": "search",
        "query": "car",
        "joke": "Chuck Norris won the daytona 500 in a flintstone car"
    },
    {
        "timestamp": "2024-06-14 20:02:42",
        "type": "random",
        "query": "",
        "joke": "Chuck Norris can literally break his foot off in your ass."
    },
        {
        "timestamp": "2024-06-15 10:51:50",
        "type": "random",
        "query": "",
        "joke": "Chuck Norris polishes the marble floors of his palaces by moonwalking around them."
    }
]
```

**A API estará acessível em http://localhost:3000.**

### 🚀 Documentação da API
Para acessar a documentação da API, visite: 
- Swagger UI: http://localhost:3000/api-docs
- GitHub Pages: 

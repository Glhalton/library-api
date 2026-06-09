# library-api

API de um sistema de biblioteca.

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Glhalton/library-api.git

cd library-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o banco de dados

```bash
docker compose up -d db
```

Esse comando inicia uma instância do banco PostgreSQL 15 com os seguintes dados:

| Configuração | Valor       |
| ------------ | ----------- |
| Host         | `localhost` |
| Porta        | `5432`      |
| Database     | `librarydb` |
| Usuário      | `admin`     |
| Senha        | `admin123`  |

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env

POSTGRES_USER="admin"
POSTGRES_PASSWORD="admin123"
POSTGRES_PORT="5433"
POSTGRES_DB="librarydb"

DATABASE_URL="postgresql://admin:admin123@127.0.0.1:5433/librarydb?schema=public"

```

### 5. Rode as migrations do banco de dados

```bash
npx prisma migrate dev
```

### 6. Gere o client do Prisma

```bash
npx prisma generate
```

### 7. Rode o seed do prisma

```bash
npx prisma seed db
```

### 8. Inicialize o servidor de desenvolvimento

```bash
npm run dev
```

| App     | URL                   |
| ------- | --------------------- |
| API     | http://localhost:3333 |
| Adminer | http://localhost:8080 |

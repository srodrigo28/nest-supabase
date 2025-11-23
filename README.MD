
<div align="center">

🚀 Project Setup Guide — Backend Node.js + NestJS + Prisma + JWT
Guia completo para instalar, configurar e executar o projeto com excelência.

</div>

📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js (versão LTS recomendada)

npm ou yarn

Banco de dados configurado no prisma/schema.prisma

Nest CLI (opcional, mas recomendado):

npm i -g @nestjs/cli

📥 Instalação do projeto

Depois de clonar o repositório:

npm install


Isso instalará todas as dependências definidas no package.json.

🗄️ Configuração do Prisma

Execute as migrações para preparar o banco:

npx prisma migrate dev


Gerar o cliente Prisma:

npm run prisma:generate

🔐 Instalação do CORS

Se ainda não estiver instalado:

npm install cors @types/cors

🔑 Autenticação JWT

Instalando JWT no Nest:

npm install --save @nestjs/jwt


Pacotes de hash de senha:

npm i bcrypt
npm i -D @types/bcrypt

🧱 Criando uma nova entidade (Model)

Recomendo este tutorial caso esteja começando com Prisma + Nest:

🔗 https://www.youtube.com/watch?v=iP7-1syNTY0

🧪 Rodar o servidor em desenvolvimento
npm run start:dev

🏗️ Gerando build de produção
npm run build


E rodando o build:

npm start


Seu projeto será executado a partir de dist/main.js.

📁 Scripts importantes (package.json)
{
  "start": "node dist/main.js",
  "verceul-build": "prisma generate && prisma migrate deploy",
  "prisma:generate": "prisma generate"
}

🖥️ Rotas, Endpoints e Documentação

📌 (Opcional – posso gerar essa seção automaticamente se você quiser: Swagger, exemplos de requests, estrutura de pastas, arquitetura etc.)

🧭 Fluxo de Execução Recomendado

1️⃣ Baixar o projeto
2️⃣ Instalar dependências
3️⃣ Configurar .env
4️⃣ Rodar migrações
5️⃣ Gerar cliente Prisma
6️⃣ Rodar servidor em dev
7️⃣ Gerar build se for produção

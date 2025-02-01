
### Para rodar o projeto
* apos baixar do github
npm install

* rodar o prisma migrate
npx prisma migrate dev

* cors
npm install cors @types/cors

### instalando o nest/jwt
npm install --save @nestjs/jwt

npm i bcrypt
npm i -D @types/bcrypt

### criando entidade nova

#### Ref.

https://www.youtube.com/watch?v=iP7-1syNTY0


#### Gerando build
npm run build


#### package.json
```
"start": "node dist/main.js",
"verceul-build": "prisma generate && prisma migrate deploy",
"prisma:generate": "prisma generate",
```
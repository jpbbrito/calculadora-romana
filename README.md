# Calculadora Romana :abacus:
## Para testar a API

Basta executar os comandos abaixo.

```
git clone https://github.com/jpbbrito/calculadora-romana
cd calculadora-romana
npm install
npx knex migrate:latest
npx knex seed:run
npm run dev
```
Para acessar os recursos estão em http://localhost:3000/api/.

## Documentação da API 
* [1. Autenticação](./docs/auths.md)
* [2. Usuários](./docs/users.md)
* [3. Soma de Números Romanos](./docs/sum.md)
* [4. Substração de Números Romanos](./docs/substraction.md)
* [5. Divisão de Números Romanos](./docs/division.md)
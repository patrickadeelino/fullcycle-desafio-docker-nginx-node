# fullcycle-desafio-docker-nginx-node

Obs: Por ser um desafio de docker e ser uma aplicação simples, mantive as operações do banco de dados e rota no index.js ao invés de separar em mais camadas.

### Desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

Full Cycle Rocks!

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

### Como testar

* Execute `docker-compose up -d`
* Acesse http://localhost:8080

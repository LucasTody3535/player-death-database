# Base de Dados de Jogadores

> Este projeto é apenas para estudo pessoal!

## Objetivo

Aprender como trabalhar com bases de dados SQL e NOSQL num mesmo projeto, aplicando conhecimentos obtidos na universidade. Eu tive a idéia após ver algo similar em Nier: Automata, então eu decidi tentar replicar.

## Sobre

Este projeto é uma api web usada para armazenar e obter dados relacionados a morte de jogadores de um jogo singleplayer genérico, quando um jogador morre o sistema armazena estas informações e quando um outro jogador chegar ao mesmo local, o sistema faz uma requisição pelos dados dos jogadores que morreram no mesmo mapa.

Adicionalmente, a mesma api é responsável pelas funcionalidades de autenticação e autorização.

## Funcionalidades

### Armazenando informações de morte de jogadores

A api permite o armazenamento dos seguintes dados relacionados a morte do jogador:

``` json
{
  "coordinates": [0, 0, 0],
  "location": "America",
  "hour": 1300,
  "username": "nome",
  "map": "nome_do_mapa",
  "items": [
    { "name": "Iron Sword", "price": 330 },
    { "name": "Gold Sword", "price": 300 }
  ]
}
```

As horas são armazenadas em minutos e as coordenadas são respectivamente x, y e z.

Depois de ser validado, os dados são então armazenados numa base de dados Mongo. Quando requisitado pelo Frontend, os dados podem ser então removidos, significando que o "corpo do jogador" foi saqueado.

### Mecanismo de Autenticação e Autorização

A api possui um sistema de autenticação que é simples, ele compara as credenciais fornecidas com credenciais de usuários existentes num banco de dados SQL, neste caso MySQL. Ao encontrar um usuário com as mesmas credenciais, o sistema cria um token JWT que será usado para permitir acesso aos endpoints da api.
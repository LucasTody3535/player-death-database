# Player Death Database

> This is a project used for personal study only!

## Objective

Learn how to work with NOSQL and SQL databases in the same project, applying
knownledges obtained from university. I had the idea after seeing something similar in Nier: Automata, so I decided to replicate it.

## About

This project is a web api that is used to store and retrive player death records from a generic single player game where when a player
dies, the system stores this information and when another
player reaches the same map location, the system
requests for players that died in the same map.

Additionally, the same api is responsible for the authentication
and authorization functionalities.

## Features

### Storing player deaths

The api allows storing the following data about each player's death:

``` json
{
  "coordinates": [0, 0, 0],
  "location": "America",
  "hour": 120,
  "username": "name",
  "map": "map_name",
  "items": [
    { "name": "Iron Sword", "price": 330 },
    { "name": "Gold Sword", "price": 300 }
  ]
}
```

The hour is stored as minutes and the coordinates are respectively x, y and z.

After validated, the data is then stored in a Mongo Database. When requested from the Frontend, the data can be removed from
the database, meaning the "player's corpse" was looted.

### Authentication & Authorization mechanism

The api has a simple authentication mechanism, it compares the provided credentials with the credentials of the users stored in a SQL database, in this caso, MySQL. When a match is found, the system creates a JWT token which will be used for later to allow access to api endpoints.

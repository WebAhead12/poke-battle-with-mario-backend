BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(36) UNIQUE,
    password varchar(36),
    team json
);

INSERT INTO users(username,password,team) 
VALUES
    ('Kuala','1234','{"pokemon1":{"name":"pikachu","sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png","moves":{"move1":"mega-punch","move2":"mega-kick","move3":"slam","move4":"body-slam"},"item":{"name":"kasib-berry","sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kasib-berry.png"}}}')
;

COMMIT;
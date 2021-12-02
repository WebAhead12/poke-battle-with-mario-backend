BEGIN;

DROP TABLE IF EXISTS users,team CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(36) UNIQUE,
    password varchar(255)
);

CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(id),
    team json
);

INSERT INTO users(username,password) 
VALUES
    ('Kuala','$2a$10$DTsPHxbTBZLRgP2EaYQauOR/8KY7hX0NgUDVLUD6zYZLpjJTmb0F2')
;

INSERT INTO team (userid,team)
VALUES
    (1,'{"pokemon1":{"name":"pikachu","sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png","moves":{"move1":"mega-punch","move2":"mega-kick","move3":"slam","move4":"body-slam"},"item":{"name":"kasib-berry","sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kasib-berry.png"}}}') 
;

COMMIT;
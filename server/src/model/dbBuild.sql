BEGIN;

DROP TABLE IF EXISTS movies CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    year VARCHAR(4) NOT NULL,
    description TEXT
);

INSERT INTO users (username, password) VALUES ('Mike', '$2a$10$HEyV6U.nsK.0I4ICu.2tZO.Le09Kt0ni8Wl4NJChqDnvWVKDwptCq'), ('Jim', '$2a$10$HEyV6U.nsK.0I4ICu.2tZO.Le09Kt0ni8Wl4NJChqDnvWVKDwptCq');

INSERT INTO movies(title, year, description) VALUES
('I walked with a Zombie', '1943', 'Evocative direction'),
('Split', '2017', 'Split serves as a dramatic tour de force for James McAvoy in multiple roles -- and finds writer-director M. Night Shyamalan returning resoundingly to thrilling form.'),
('The Conjuring 2', '2016', 'The Conjuring 2 can''t help but lose a bit of its predecessor''s chilly sting through familiarity, but what remains is still a superior ghost story told with spine-tingling skill.'),
('The Others', '2001', 'The Others is a spooky thriller that reminds us that a movie doesn''t need expensive special effects to be creepy.');

COMMIT;

\c movies
CREATE USER movie_manager WITH PASSWORD 'testing';
GRANT ALL PRIVILEGES ON DATABASE movies TO movie_manager;
GRANT SELECT, INSERT, UPDATE, DELETE ON rental, film, inventory TO movie_manager;

ALTER TABLE contact ADD COLUMN id SERIAL PRIMARY KEY,
ALTER TABLE contact ADD COLUMN name VARCHAR(100),
ALTER TABLE contact ADD COLUMN number INTEGER UNIQUE
ALTER TABLE contact ADD COLUMN fn INTEGER

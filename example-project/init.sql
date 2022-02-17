CREATE DATABASE car_parts;
CREATE USER car_parts WITH PASSWORD 'testing';
GRANT ALL PRIVILEGES ON DATABASE car_parts to car_parts;
\c car_parts

CREATE TABLE manufacturers (
  manufacturer_id INTEGER NOT NULL,
  name            VARCHAR(128) NOT NULL,
  street_address  VARCHAR(256) NOT NULL,
  city            VARCHAR(64) NOT NULL,
  state           VARCHAR(32) NOT NULL,
  zip             VARCHAR(16) NOT NULL,
  phone           VARCHAR(16) NOT NULL,
  PRIMARY KEY     ( manufacturer_id )
);

CREATE TABLE customers (
  customer_id     INTEGER NOT NULL,
  name            VARCHAR(128) NOT NULL,
  street_address  VARCHAR(256) NOT NULL,
  city            VARCHAR(64) NOT NULL,
  state           VARCHAR(32) NOT NULL,
  zip             VARCHAR(16) NOT NULL,
  phone           VARCHAR(16) NOT NULL,
  PRIMARY KEY     ( customer_id )
);

CREATE TABLE parts (
  part_id         INTEGER NOT NULL,
  name            VARCHAR(128) NOT NULL,
  description     TEXT NOT NULL,
  manufacturer_id INTEGER NOT NULL,
  PRIMARY KEY ( part_id ),
  CONSTRAINT fk_manufacturer FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(manufacturer_id)
);

CREATE TABLE orders (
  order_id        INTEGER NOT NULL,
  part_id         INTEGER NOT NULL,
  customer_id     INTEGER NOT NULL,
  quantity        INTEGER NOT NULL,
  PRIMARY KEY ( order_id, customer_id, part_id ),
  CONSTRAINT fk_part FOREIGN KEY (part_id) REFERENCES parts(part_id), 
  CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

GRANT ALL PRIVILEGES ON manufacturers, customers, parts, orders TO car_parts;

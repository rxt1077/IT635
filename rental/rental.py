import psycopg2

conn = psycopg2.connect("postgresql://movie_rental:2h6WBFyGVUv88qgJ@localhost/movies")
cur = conn.cursor()

while True:
    print("Please enter inventory ID")
    inventory_id = int(input())
    print("Please enter customer ID")
    customer_id = int(input())
    print("Please enter staff ID")
    staff_id = int(input())
    cur.execute("""
        INSERT INTO rental (rental_date, inventory_id, customer_id, return_date, staff_id)
        VALUES (NOW(), %s, %s, NOW() + INTERVAL '7 DAYS', %s)
        RETURNING rental_id;
    """, (inventory_id, customer_id, staff_id));
    rental_id = cur.fetchone()[0]
    print(f"Rental submitted: ID {rental_id}")
    conn.commit()

cur.close()
conn.close()

import { Client }  from "pg";
import 'dotenv/config';

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username VARCHAR(255),
    date TIMESTAMP
);

    INSERT INTO messages (text, username, date)
    VALUES
    ('Hi there!', 'Charles', NOW()),
    ('hello world!', 'Amando', NOW())`;

const dbUrl = process.env.NODE_ENV === 'production'
    ? process.env.PROD_DATABASE_URL
    : process.env.DEV_DATABASE_URL;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: dbUrl,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
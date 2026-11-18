import { Client } from "pg";

const createTable = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message VARCHAR ( 1000 ), 
    username VARCHAR ( 255 ), 
    added TIMESTAMP
);`

const insertValues = `INSERT INTO messages (message, username, added) 
VALUES 
    ('Hello World', 'HJ', ($1)), 
    ('Hello Everyone', 'JJ', ($1));
`;

const values = [new Date()]

async function main(){
    console.log("seeding...");
    const client  = new Client({
        connectionString: process.argv[2],
    });
    await client.connect();
    await client.query(createTable);
    await client.query(insertValues, values);
    await client.end();
    console.log("done");
}

main();
import { Pool } from "pg";

let connectionString;

connectionString = process.env.CONNECTION_URL;

export default new Pool({
    connectionString
})
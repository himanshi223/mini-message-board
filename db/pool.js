import { Pool } from "pg";

let connectionString;

try{
    process.loadEnvFile();
    connectionString = process.env.CONNECTION_URL;
} catch(error){
    console.error("Error occured: ", error);
}

export default new Pool({
    connectionString
})
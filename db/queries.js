import pool from "./pool.js";

async function getAllMessages(){
    const { rows } =  await pool.query("SELECT * FROM messages;");
    return rows;
}

async function getMessageById(id){
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1);", [id]);
    return rows[0];
}

async function insertMessage(message, user){
    await pool.query("INSERT INTO messages (message, username, added) VALUES ($1, $2, $3);", [message, user, new Date()]);
    return;
}

export { getAllMessages, getMessageById, insertMessage };
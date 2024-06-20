const database = require("better-sqlite3");
const db = new database("./mango.db");
module.exports=db;
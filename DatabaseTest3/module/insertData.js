const database = require("better-sqlite3");
const db = new database("./mango.db");
const InsertData = (obj, tableName) => {
  const insert = db.prepare(`INSERT INTO ${tableName} (id, name, age) VALUES(?,?,?)`)
  insert.run(obj.id, obj.name, obj.age);
  // insert.finalize(); 
}
module.exports=InsertData;
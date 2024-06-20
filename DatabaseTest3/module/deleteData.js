const database = require("better-sqlite3");
const db = new database("./mango.db");
const deleteData = (name, tableName) => {
  const delets = db.prepare(`DELETE FROM ${tableName} WHERE name = ?`)
  delets.run(name)
}
module.exports=deleteData;
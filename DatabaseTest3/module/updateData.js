const database = require("better-sqlite3");
const db = new database("./mango.db");
const UpdateData = (changeName,obj, tableName,name,id) =>{
  const update = db.prepare(`UPDATE ${tableName} SET ${name} = ? WHERE ${id} = ?`)
  update.run(changeName, obj.id)
}
module.exports=UpdateData;
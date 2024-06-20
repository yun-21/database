const database = require("better-sqlite3");
const db = new database("./test.db");
const create = require("./module/createTable")


const InsertData = (obj, tableName) => {
  const insert = db.prepare(`INSERT INTO ${tableName} (id, name, age) VALUES(?,?,?)`)
  insert.run(obj.id, obj.name, obj.age);
  // insert.finalize(); 
}

const UpdateData = (obj, tableName) =>{
  const update = db.prepare(`UPDATE ${tableName} SET name = ? WHERE id = ?`)
  update.run("바이", obj.id)
}

const deleteData = (name, tableName) => {
  const delets = db.prepare(`DELETE FROM ${tableName} WHERE name = ?`)
  delets.run(name)
}

let obj = {
  id : 3,
  name : "뭐지",
  age : 103
}

// InsertData(obj,"test")
UpdateData(obj,"test")
create("mango");
deleteData("배열","test")

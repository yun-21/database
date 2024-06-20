const create = require("./module/createTable")
const insert = require("./module/insertData")

// const UpdateData = (obj, tableName) =>{
//   const update = db.prepare(`UPDATE ${tableName} SET name = ? WHERE id = ?`)
//   update.run("바이", obj.id)
// }

// const deleteData = (name, tableName) => {
//   const delets = db.prepare(`DELETE FROM ${tableName} WHERE name = ?`)
//   delets.run(name)
// }

let obj = {
  id : 3,
  name : "뭐지",
  age : 103
}

// UpdateData(obj,"test")
create("mango");
insert(obj,"mango")
// deleteData("배열","test")

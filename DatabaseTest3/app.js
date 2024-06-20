const create = require("./module/createTable")
const insert = require("./module/insertData")
const update = require("./module/updateData")


// const deleteData = (name, tableName) => {
//   const delets = db.prepare(`DELETE FROM ${tableName} WHERE name = ?`)
//   delets.run(name)
// }

let obj = {
  id : 3,
  name : "뭐지",
  age : 103
}

update("바바",obj,"mango","name","id")
create("mango");
// insert(obj,"mango")

// deleteData("배열","test")

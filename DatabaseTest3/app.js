const create = require("./module/createTable")
const insert = require("./module/insertData")
const update = require("./module/updateData")
const deletes = require("./module/deleteData")

let obj = {
  id : 3,
  name : "하구",
  age : 103
}

// update("바바",obj,"mango","name","id")
// create("mango");
// insert(obj,"mango")

deletes("정구","mango")

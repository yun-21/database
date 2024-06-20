const database = require("better-sqlite3");
const db = new database("./mango.db");
const CreateTable = (tableName) =>{
  const check = db.prepare(`SELECT COUNT(*) FROM sqlite_master WHERE name=?`)
  const isTrue = Object.values(check.get(tableName))*1
  if(isTrue){
    console.log(`${tableName}의 테이블이 이미 있음`)
  }
  else{
    const create = db.prepare(`CREATE TABLE ${tableName}(id INTEGER PRIMARY KEY, name TEXT NOT NULL, age INTEGER NOT NULL)`);
    create.run()
  }
}
module.exports=CreateTable;
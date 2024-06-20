const database = require("better-sqlite3");
const db = new database("./test.db");

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

const InsertData = (obj, tableName) => {
  const insert = db.prepare(`INSERT INTO ${tableName} (id, name, age) VALUES(?,?,?)`)
  insert.run(obj);
  insert.finalize();
}
let obj = {
  id : 1,
  name : "객체",
  age : 100
}

InsertData(obj,"test")

CreateTable("test");


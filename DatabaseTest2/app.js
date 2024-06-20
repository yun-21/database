const database = require('better-sqlite3');
const db = new database("./better.db");
// const database = require('better-sqlite3');
// const db = new database("./better.db");

const checkDb = db.prepare("SELECT COUNT(*) FROM sqlite_master WHERE name='zootopia'");
// const checkDb = db.prepare("SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name='zootopia'");

//Object.values() 정적 메서드는 지정된 객체 자체의 열거 가능한 문자열 키 속성 값의 배열을 반환합니다.
let isTrue = Object.values(checkDb.get())*1;
if(isTrue){
    console.log("테이블이 이미 존재합니다.");
}
else{
    const createData = db.prepare("CREATE TABLE zootopia (name TEXT PRIMARY KEY, age INTEGER NOT NULL, address TEXT)")
    createData.run();
    console.log("테이블을 생성했습니다.");
}

const insertData = (name,age,address)=>{
    const insert = db.prepare("INSERT INTO zootopia (name, age, address) VALUES (?, ?, ?)");
    insert.run(name,age,address)
}

const updateData = () =>{
    const update = db.prepare("UPDATE zootopia SET age = '22' WHERE name = '신지윤'");
    update.run()
}



if(isTrue){
    insertData("멍지윤","20","송촌동")
    updateData()
}
db.close()






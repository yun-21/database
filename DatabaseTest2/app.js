const database = require('better-sqlite3');
const db = new database("./better.db");

const checkDb = db.prepare("SELECT COUNT(*) FROM sqlite_master WHERE name='zootopia'");

//Object.values() 정적 메서드는 지정된 객체 자체의 열거 가능한 문자열 키 속성 값의 배열을 반환합니다.
let isTrue = Object.values(checkDb.get())*1;
if(isTrue){
    console.log("dd")
}
else{
    const createData = db.prepare("CREATE TABLE zootopia(name TEXT PRIMARY KEY, ")
}
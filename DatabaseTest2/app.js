const database = require('better-sqlite3');
const db = new database("./better.db");
// const database = require('better-sqlite3');
// const db = new database("./better.db");

const checkDb = db.prepare("SELECT COUNT(*) FROM sqlite_master WHERE name='zootopia'");
// const checkDb = db.prepare("SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name='zootopia'");

//Object.values() 정적 메서드는 지정된 객체 자체의 열거 가능한 문자열 키 속성 값의 배열을 반환합니다.
let isTrue = Object.values(checkDb.get()) * 1;
if (isTrue) {
    console.log("테이블이 이미 존재합니다.");
}
else {
    const createData = db.prepare("CREATE TABLE zootopia (name TEXT PRIMARY KEY, age INTEGER NOT NULL, address TEXT)")
    createData.run();
    console.log("테이블을 생성했습니다.");
}

// const insertData = (name, age, address) => {
//     const insert = db.prepare("INSERT INTO zootopia (name, age, address) VALUES (?, ?, ?)");
//     insert.run(name, age, address)
// }
let all = {
    name : "박지윤",
    age : 26,
    address : "서구"
}

const updateData = () => {
    const update = db.prepare("UPDATE zootopia SET age = '22' WHERE name = '신지윤'");
    update.run()
}

const deleteData = () => {
    const deletes = db.prepare("DELETE FROM zootopia WHERE name = '멍지윤'")
    deletes.run()
}

const selectData = () => {
    try {
        // prepare()로 SQL 문을 준비하고, all()로 모든 결과 행을 배열로 반환
        //동기적인 API를 사용하여, 콜백함수를 받지않는다
        const rows = db.prepare("SELECT * FROM zootopia").all();
        rows.forEach((row) => {
            console.log(`${row.name}: ${row.age} - ${row.address}`);
        });
    } catch (err) {
        console.error("데이터 조회 중 오류 발생:", err);
    }
}


if (isTrue) {
    // insertData("멍지윤","20","송촌동")
    // deleteData()
    // updateData()
    // selectData()
}


const db = require("sqlite3").verbose();

class MakeDatabase {
    constructor(){
        this.database = new db.Database("./test.db");
    }

    // 테이블 생성
    createData(){
        this.database.run("CREATE TABLE IF NOT EXISTS smart(id TEXT PRIMARY KEY, pwd TEXT, age INTEGER)", (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Table created successfully");
        });
    }

    // 데이터 삽입
    insertData(id,pwd,age){
        let insert = this.database.prepare("INSERT INTO smart(id, pwd, age) VALUES (?, ?, ?)");
        insert.run(id, pwd, age, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Data inserted successfully");
        });
        insert.finalize();
    }

    // 데이터 조회
    selectData(){
        this.database.all("SELECT * FROM smart", [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row);
            });
        });
    }
}

// 데이터베이스 작업 수행
const make = new MakeDatabase();
make.createData();
make.insertData("아이디","비밀번호22",22);
make.selectData();
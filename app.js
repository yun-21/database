//node 환경에서 sqlite3를 조작하기 위해서는 외부 라이브러리의 도움이 필요하다
//better-sqlite3는 동기적으로 작동한다는 특징이 있다.
const db = require("better-sqlite3");

class MakeDatabase {
    constructor(){
        this.database = new db("./test.db");
    }
    createData(){
        this.database.run("CREATE TABLE smart(id TEXT PRIMARY KEY, pwd TEXT, age INTEGER)");
    }

    insertData(id ,pwd ,age){
        let insert = this.database.prepare("INSERT INTO smart(id, pwd, age) value (?,?,?)");
        insert.run(id,pwd,age)
        insert.finalize()
    }
}
const make = new MakeDatabase();
make.insertData("신지윤","신지윤123",25)
//node 환경에서 sqlite3를 조작하기 위해서는 외부 라이브러리의 도움이 필요하다
//better-sqlite3는 동기적으로 작동한다는 특징이 있다.
const db = require("better-sqlite3");

const database = new db.database("./test.db")

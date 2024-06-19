const db = require('sqlite3').verbose(); //sqlite3 모듈 불러와서 변수에 담기
const sqlite = new db.Database(":memory:",(err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database')
});
sqlite.close((err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('Close the database connection')
})
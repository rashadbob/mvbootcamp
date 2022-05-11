const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Success!!");
    }
})




//db.run("CREATE TABLE users(first_name, last_name, username, password, email, id)");
// create once then comment out as its
const sql = "INSERT INTO users VALUES('Sam', 'Test', 'STest', 'Test123', 'samantha.Test@multiverse.io', 2)"
db.run(sql, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Row Created!");
    }
});


const sql2 = "INSERT INTO users VALUES('Sam', 'Test', 'STest', 'Test123', 'samantha.Test@multiverse.io', 2)"
db.run(sql2, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Row Created!");
    }
});

const sql3 = "UPDATE users SET first_name = 'Samantha' WHERE first_name='Sam';"
db.run(sql3, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Row Updated!");
    }
});


const selectSql = "SELECT * FROM COMPANY";

db.run("INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)VALUES ('MAD', 29, ' York', 35000.00 )"
);



db.all(selectSql, (err, rows) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        rows.forEach((row) => {
            console.log(row);
        });
    }
})


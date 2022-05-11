const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./sqlTask1DB.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Success!!");
    }
})
//resturant  : id (int, autoincrement), name (string),imagelink(string)

//db.run("CREATE TABLE ResturantClass(ID INTEGER PRIMARY KEY AUTOINCREMENT,NAME TEXT NOT NULL,IMAGELINK TEXT NOT NULL)");

const selectSql3 = "SELECT * FROM MenuItem"
const selectSql2 = "SELECT * FROM Menu";
db.run("CREATE TABLE Menu(ID INTEGER PRIMARY KEY AUTOINCREMENT,TITLE TEXT NOT NULL,restaurant_id INT,  FOREIGN KEY (restaurant_id) REFERENCES RestaurantClass(ID))");
const selectSql = "SELECT * FROM ResturantClass";
db.run("CREATE TABLE MenuItem(ID INTEGER PRIMARY KEY AUTOINCREMENT,NAME TEXT NOT NULL,PRICE)");
const selectSql4 ="SELECT ResturantClass.NAME,Menu.TITLE FROM ResturantClass JOIN Menu ON ResturantClass.ID WHERE ResturantClass.ID=1"
db.run("INSERT INTO Menuitem (NAME,PRICE)VALUES ('STEAK','10')");
db.run("INSERT INTO Menu (TITLE)VALUES ('DINNER')");
db.run("INSERT INTO ResturantClass (NAME,IMAGELINK)VALUES ('MACDONALDS', 'WWW.MCDONALDS.CO.UK')");



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





db.all(selectSql2, (err, rows) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        rows.forEach((row) => {
            console.log(row);
        });
    }
})
db.all(selectSql3, (err, rows) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        rows.forEach((row) => {
            console.log(row);
        });
    }
})

db.all(selectSql4, (err, rows) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        rows.forEach((row) => {
            console.log(row);
        });
    }
})




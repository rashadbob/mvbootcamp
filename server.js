const sqlite3 = require("sqlite3")
const { check, validationResult } = require('express-validator');

const db = new sqlite3.Database("./sqlTask2DB.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Success!!");
    }
})// how you connect to a database 

const express = require('express');

const app = express();

const port = 3000;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  /////////////////////////////////////////  

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})

//api
app.get("/resturants", (request, response) => {//'/now' refers to date and time
    resturants=[] 
   
   // response.send(display());
     
     const selectSql = "SELECT * FROM ResturantClass";
     db.all(selectSql, (err, rows) => {
         if (err) {
            //  return console.error(err.message);
         }
         else {
             rows.forEach((row) => {
              //add row from datatbase to resturant array
             
            resturants.push(row)//a
                
             });
             response.send (resturants)
             //send resturant array to html
         }
     })
    });


    app.get("/resturants/:id", (req, res) => {
            console.log(req.params);
       
        resturantstest=[]
        const selectSql2= `SELECT * FROM ResturantClass WHERE ID = ${req.params.id}`
                
            db.all(selectSql2, (err, rows) => {
                if (err) {
                    return console.error(err.message);
                 }
                
                else {
                
                    rows.forEach((row) => {
                 //add row from datatbase to resturant array
            
                    resturantstest.push(row)//a
               
                  });
           
                  res.send (resturantstest)
            //send resturant array to html
        }
    }) 
         });

         app.post('/resturants', (req, res) => { 
            
            const selectSql = "SELECT * FROM ResturantClass";
            console.log(req.body);
             // use the data in req.body to add a new restaurant to the database
             res.sendStatus(201);

             

                db.run(`INSERT INTO ResturantClass (NAME,IMAGELINK)VALUES ('${req.body.NAME}','${req.body.IMAGELINK}')`);
                console.log( " setting Name to " + req.body.NAME + ", setting url to " + req.body.NAME)


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
            })
            

        app.put('/resturants/:id', function (req, res) {
            const selectSql = "SELECT * FROM ResturantClass";
            
            const index = req.params.id;
            db.run(`UPDATE ResturantClass SET IMAGELINK='${req.body.imagelink}' WHERE ID = '${index}'`);
             console.log("Updating Restaurant " + index + " setting Name to " + req.body.name + ", setting url to " + req.body.imagelink);
            
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
           
            res.sendStatus(404);//send a respond after the function has worked

       
       
       
       
            });
                
        app.post('/cafe', [
            check('name').not().isEmpty().trim().escape(),
            check('imagelink').not().isEmpty(),
           // check('name').test()//ASK SAM ABOUT IT AT THE END OF THE DAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYTDYD!!!!!!!!!!!!!!!!!!!!!!

        

        ], async (req, res) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            


        })
        


        













    // //IN REAL WORLD YOU NEVER SEARCH WITH STRING
    //      app.get("/resturant/:name", (req, res) => {
    //         console.log(req.params);
       
    //     resturantstest=[]
    //     const selectSql2= `SELECT * FROM ResturantClass WHERE NAME = '${req.params.name}'`
                
    //         db.all(selectSql2, (err, rows) => {
    //             if (err) {
    //                 return console.error(err.message);
    //              }
                
    //             else {
                
    //                 rows.forEach((row) => {
    //              //add row from datatbase to resturant array
            
    //                 resturantstest.push(row)//a
               
    //               });
           
    //               res.send (resturantstest)
    //         //send resturant array to html
    //     }
    // }) 
    //      });




   
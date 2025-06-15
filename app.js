console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
//CRUD ishlashi uchun Mongodb ni require qilib olamiz
const mongodb = require("mongodb");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB chaqiramiz
const db = require("./server").db(); //...CRUD
//1.Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2. Session codes
//3. Views codes
app.set("views", "views");
app.set("view engine", "ejs");

//4.Routing codes
app.get("/", function (req, res) {
  console.log("*** Read ****");

  console.log(" STEP2: FrontEnd => BACKEND'ga  keldi");

  console.log(" STEP3: BACKEND => DB ketdi");

  db.collection("plans") //plans degan collectionni ushla
    .find() // unidagi hamma malumotlarni ol
    .toArray((err, data) => {

  console.log(" STEP4: DB => Backend data olib keldi");

  console.log(" STEP5: Backend => Frontendga javob yuborish");

      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {

        res.render("reja", { items: data });
      }
    });
});

// Create API
app.post("/create-item", (req, res) => {
  console.log("*** Create  ****");

  console.log("STEP 2: FRONTEND =>  BACKEND");

  console.log("STEP 3: BACKEND =>  DB");


  const new_reja = req.body.reja;
  // console.log("STEP-3: BACKEND => DATABASE ");
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {

  console.log("STEP 4: DB =>  BACKEND QAYTDI");

  console.log("STEP 5: BACKEND =>  FRONTEND JAVOB YUBORDI");

    
    console.log(data.ops)
    res.json(data.ops[0]);
  });
});


// Delete API
// app.post("/delete-item", (req, res) =>{
//   const id = req.body.id;
  
//   console.log("*** Delete ****");

//   console.log("STEP 2: FRONTEND => BACKEND keldi");



//   db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
//     console.log("STEP 3: BACKEND =>  DB ketdi");

//     console.log("STEP 4: DB => BACKEND keldi");

//     res.json({state : "success"})

//     console.log("STEP 5: BACKEND => FrontEnd ketdi");
  

//   });
// })

// edit API

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log("*** EDIT ****");

  console.log("STEP 2: FrontEnd => BackEnd keldi");

  console.log("STEP 3: BackEnd => DB ketdi");


  console.log(data);

  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id)},
    {$set: { reja: data.new_input}},
    function (err, data) {
      res.json({state: "success"});
    }
  )
  console.log("STEP 4: DB => BackEnd data olib  keldi");

  console.log("STEP 5: BackEnd => FrontEnd ketdi");



});

// delete all api

// app.post("/delete-all", (req, res) => {
//   console.log("*** DELETE ALL ****");
//   console.log("STEP 2: FrontENd => BackEnd keldi");

 

//   if(req.body.delete_all) {
//     console.log("STEP 3: BackEnd => DB ketdi");
//     db.collection("plans").deleteMany(function() {
//       res.json({ state: "hamma rejalar ochirildi"});
//     });

//     console.log("STEP 4: DB => BackEnd keldi");

//     console.log("STEP 5: BackEnd => FrontEnd Ketdi");

    
//   }
// })



app.get("/author", (req, res) => {
  console.log("*** AUTHOR ****");

  res.render("author", { user: user });
});



module.exports = app;
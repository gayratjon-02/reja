console.log('Web Serverni boshlash');
const express = require('express');
const app = express();
// express() orqali app obectini chaqirib olamiz
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err){
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data);
    }
});

// 1 : Kirish code
app.use(express.static("public"));
// Har qanday browserdan kirib kelayotgan sorovlar
// uchun public folder ochiq degan manoni anglatadi.
// keinchalik style va image'larni shu folderga joylashtiriladi

app.use(express.json());
// bu kodimiz  kirib kelayotgan json formatdagi
// datani object'ga ogirib beradi

app.use(express.urlencoded({extended: true}));
// HTML form'dan POST qilinganda express server 
// qabul qilib olish uchun yoziladi. bu yozilmasa
// formdan express qabul qilmaydi

// 2 SESSION =========

// 3 Views code: Traditional usulda ya'ni backend'da view yasab
// uni cliend(user)'ga yuboramiz....
app.set("views", "views");
// view folder korsatiladi
app.set("view engine", "ejs")
// view egine'ni ejs ekanligi korsatiladi
// Ejs orqali backend ichida frontend(view) yasaymiz

// 4 Routiing code 


app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
    
})


app.get("/", function(req, res){
    res.render("reja");
});
// app.get("/hello", function(req, res){
//     res.end(`<h1 style = "background: red">HELLO WORLD by Gayratjon(ALI)</h1>`);
// });

// app.get("/gift", function(req, res){
//     res.end('siz sovgalar bolimidasiz')
// })

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log((`The server is running seccessfully on port: ${PORT}, http://localhost:${PORT}`));
});




 
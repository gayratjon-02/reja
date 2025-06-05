// A-TASK: 


function countLetter (letter,  word){
   const letters = word.split("");
   const found = letters.filter((ll) => ll === letter);
   console.log(`${word} sozida ${found.length} ta ${letter} harfi bor `);
    
    
      
};





countLetter("e",  "engeenering");



// TASK A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// // 3 sonini qaytaradi


// Assalomu alaykum

// MITASK’larni train.js fileda yozasiz!

// yozish tartibingiz:

// Masalani izohi
// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:
// Qilgan Yechimingiz…


// agarda npm run train deganimda train.js ishga tushmasa yengilgina “FAIL” bo’lasiz!


//  *********************************************************
// Video 1

// NodeJs event loop & asynchrnous  & callback functions


// CallBack functions
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Uzingizga ishlatishni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga inversitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq" , //60

// ];

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback("Please insert the Number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30 ) callback(null, list[1]);
//     else if(a > 30 && a <= 40 ) callback(null, list[2]);
//     else if(a > 40 && a <= 50 ) callback(null, list[3]);
//     else if(a > 50 && a <= 60 ) callback(null, list[4]);
//     else{
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 5000);
//     }
// };

// console.log("Passead here");



// maslahatBering(99, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else{
//         console.log("Javob: ", data);
//     }
    
    
// })

// console.log("Passead here 1");

//  *********************************************************
// Video 2 : aSynchronous function




// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Uzingizga ishlatishni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga inversitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq" , //60

// ];

// async function maslahatBering(a){
//     if(typeof a !== "number") throw new Error ("Please insert the Number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30 ) return list[1];
//     else if(a > 30 && a <= 40 ) return list[1];
//     else if(a > 40 && a <= 50 ) return list[1];
//     else if(a > 50 && a <= 60 ) return list[1];
//     else{
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });


        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(list[5]);
        //     }, 5000);
        // });


        // setTimeout(() => {
        //     callback(null, list[5]);
//         // }, 5000);
//     }
// };

// console.log("Passead here");

//     maslahatBering(500).then((data) => {
//         console.log("javob:", data);
//     }).catch((err) => {
//         console.log("ERROR:", err);
//     })


// console.log("Passead here 1");



//

// async function run() {
//     let javob = await maslahatBering(19);
//     console.log(javob);
//     javob = await maslahatBering(33);
//     console.log(javob);
//     javob = await maslahatBering(66);
//     console.log(javob);
//     javob = await maslahatBering(53);
//     console.log(javob);
//     javob = await maslahatBering(66);
//     console.log(javob);
// }

// run();

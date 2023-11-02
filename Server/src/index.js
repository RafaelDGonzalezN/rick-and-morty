// const http = require("http");
// const characters = require("./utils/data")
// const getCharByID = require("./controllers/getCharById")

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    
//     const { url } = req;


//     // if(url.includes("/rickandmorty/character")){
//     //     const id = Number(url.split("/").pop())
//     //     const foundCh = characters.find((ch) => ch.id === id)

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop())
//         getCharByID(res,id);

//         // if(foundCh){
//         //     res.writeHead(200,{"Content-Type": "application/json"})
//         //     return res.end(JSON.stringify(foundCh)) 
//         // }else{
//         //     res.writeHead(404,{"Content-Type": "application/json"})
//         //     return res.end(JSON.stringify({error: "Character not found"})) 
//         // }

//     }
// })
// .listen(3001, "localhost")

const express = require('express');
// const router = require ("./routes/index")
const server = express();
const PORT = 3001;

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });
//  server.use(express.json())
//  server.use("/rickandmorty", router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

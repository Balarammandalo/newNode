const express = require("express")
const app = express()

app.get("/book" , (req , res) =>{
    res.send("books is ready")
})

app.listen(4000 , () =>{
    console.log("App running successfully on 4000")
})
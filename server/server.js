require('dotenv').config()
const express = require('express'); // import express
const app = express(); // create express app

    app.use(express.json()); // use json

const port = process.env.PORT // ses la carpeta del proyecto
 // listen to port

app.get('/users', (req, res) => {
    
    res.send("LLegamos ahi")
});

app.post('/new-user', (req,res) => {
    console.log(req.body) // recibe el body
    res.send("LLegamos ahi")
})

app.listen(port, () => { // listen on port 3000
    console.log(`escuchando en puerto ${port}`);
});
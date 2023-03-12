// adding npm i express //
const express = require('express');

// adding path, providing utilities for working with my file and directories //
const path = require('path');

// adding fs to read files
const fs = require('fs');

// const app = express();
const app = express();

// adding port //
// the process.env.PORT is for heroku or by default port 3000//
const PORT = process.env.PORT || 3000;


//adding middleware to parse incoming data//
//parses incoming request with bodies in the format of 'x-www-form-urlencoded'//
app.use(express.urlencoded({ extended: true }));

//parses incoming request with bodies in the format of 'json'//
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/main_introduction.html"))
});

app.get("/note_app", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/note_app.html"))
});




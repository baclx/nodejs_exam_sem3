const express = require('express')
const bodyParser = require('body-parser')

// import express from 'express';
// import bodyParser from 'body-parser';
// import fetch from 'node-fetch';
// import db from "./models"


// import fetch from "node-fetch";

const app = express()

const jsonParser = bodyParser.json()

// VIEWS
app.set('view engine', 'ejs');

// msg
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

// db
const db = require("./models");
db.sequelize.sync();

const User = db.user;

// routes
app.get('/all', (req, res) => {
    const response = fetch('http://localhost:8080/api/v1/addUser')
    const data = response.json();

    res.render("pages/index", { menus: data });
});

app.get("/add", async (req, res) => {
    res.render("pages/add");
})

// CREATE
app.post('/api/v1/addUser', jsonParser, async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        userName: req.body.userName,
        password: req.body.password
    }

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
})

// READ
app.get('/api/v1/addUser', jsonParser, async (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
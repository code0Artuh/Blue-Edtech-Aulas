const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());

const Conn = require("./model/conn/index");

Conn();


console.log("running on http:\\localhost:3000");
app.listen(3000);

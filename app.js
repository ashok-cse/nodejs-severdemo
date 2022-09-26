const express = require('express');
var cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json());

const quizRouter = require('./routes/quiz');

app.use("/todos", quizRouter);



module.exports = app;

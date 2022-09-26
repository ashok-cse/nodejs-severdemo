const mongoose = require('mongoose');


const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        sparse : true
    },
    answer: [],
    options: [],
    explain: {
        type: String,
        sparse : true
    },
    category: {
        type: String,
        sparse : true
    }
});

module.exports = mongoose.model('Quiz', quizSchema);





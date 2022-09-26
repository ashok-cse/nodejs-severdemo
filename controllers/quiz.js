const Quiz = require('../modals/quiz');


exports.createQuiz = async (req, res) => {
  try {
    const quiz = req.body;
    const newquiz = await Quiz.create(quiz);
    res.status(201).json({
        status: 'success',
        data: {
            quiz: newquiz

        }
    });
  }
    catch (err) {
        console.log(err);
        }
}

exports.getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.find();
        res.status(200).json({
            status: 'success',
            data: {
                quiz
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                quiz
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

exports.updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                quiz
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteQuiz = async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    catch (err) {
        console.log(err);
    }
}


const express = require('express');
const { createQuiz, getQuiz, getQuizById, updateQuiz, deleteQuiz } = require('../controllers/quiz');


const router = express.Router();


router.route('/create').post(createQuiz);
router.route('/').get(getQuiz);
router.route('/:id').get(getQuizById);
router.route('/:id').patch(updateQuiz);
router.route('/:id').delete(deleteQuiz);



module.exports = router;
const router = require('express').Router();
const {
    addThought,
    addReaction,
    deleteReaction,
    deleteThought,
    getThoughts,
    getThoughtById,
    updateThoughtById
} = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(addThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById);

router.route('/:userId/:thoughtId').put(addReaction).delete(deleteThought);

router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
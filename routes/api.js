const router = require('express').Router();
const Workout = require('../models/Workout')

router.get('/api/workouts', async (req, res) => {
    try{
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
});

router.get('/api/workouts/range', async (req, res) => {
    try{
        const workouts = await Workout.find({});
        res.json(workouts);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
});

//POST
router.post('/api/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
});

//put
router.put('/api/workouts/:id', async (req, res) => {
    try {
            await Workout.findOneAndUpdate( 
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true })
            .then(data => {
            res.json(data)
            })
         } catch (err) {
        res.status(400).send({ message: err.message })
    }
});

module.exports = router;




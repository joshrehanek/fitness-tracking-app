const router = require('express').Router();
const Workout = require('../models/Workout')

router.get('/workouts', async (req, res) => {
    try{
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.get('/workouts/range', async (req, res) => {
    try{
        const workouts = await Workout.find({}).limit(7);
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//POST
router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

//put
router.put('/workouts/:id', async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate( 
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true });
            res.json(updatedWorkout)
    } catch (err) {
        res.status(400),json({ message: err.message })
    }
});

module.exports = router;




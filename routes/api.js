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
        const newWorkout = await workout.create({});
        res.json(newWorkout);
        res.status(201).json(newWorkout);
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
});
//put
router.put('/workouts/:id', async (req, res) => {
    try {
        const updatedWorkout = await res.workout.findByIdAndUpdate(
            req.params.id, 
            {$push:{
                exercises: req.body
            }}
        );
        res.json(updatedWorkout);
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
});


//delete find by id and delete


module.exports = router;




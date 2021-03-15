// define schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 50, 'name is too long!']
        },
        name: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 50, 'name is too long!']
        },

        duration: {
            type: Number,
            required: true
        },

        weight: {
            type: Number
        },

        sets: {
            type: Number
        },

        reps: {
            type: Number
        },

        distance: {
            type: Number

        }
    }
    ]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;
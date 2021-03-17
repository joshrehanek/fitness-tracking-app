// define schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
            trim: true,
            required: true,
            default: 0
        },

        weight: {
            type: Number,
            trim: true,
            default: 0
        },

        sets: {
            type: Number,
            trim: true,
            default: 0

        },

        reps: {
            type: Number,
            trim: true,
            default: 0
        },

        distance: {
            type: Number,
            trim: true,
            default: 0
        }
    }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
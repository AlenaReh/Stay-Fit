const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    excercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of Excercise is Required"
            },
            name: {
                type: String,
                trim: true,
                required: "Name of Excercise is Required"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Duration of Excercise is Required"
            },
            weight: {
                type: Number,
                trim: true,
                required: true
            },
            reps: {
                type: Number,
                trim: true,
                required: true
            },
            sets:{
                type: Number,
                trim: true,
                required: true
            },
            distance: {
                type: Number,
                trim: true,
                required: true
            },
        }
    ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
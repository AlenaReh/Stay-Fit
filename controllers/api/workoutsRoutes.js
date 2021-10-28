const router = require("express").Router();
const db = require("../../models");

//get route for your last workout
router.get('/', (req, res) => {
    db.Workout.aggregate([
            {
              $addFields: {
                totalDuration: { $sum: "$exercises.duration" } 
              }
            }
         ])
    .then(getWorkout => {
        res.json(getWorkout);
    })
    .catch (err => {
        res.json(err);
    })
});

//post route for adding a new workout
router.post('/', async (req, res) => {
    try{
        const newWorkout = await db.Workout.create({})
        res.json(newWorkout);
    }
    catch (err){
        console.log(err);
    }
});

//put router by id for update an individual workout
router.put('/:id', async ({ body, params }, res) => {
  
    try{
        console.log("Continue workout with", body , params.id);
       await db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }})
       .then((newWorkout) => {
        res.json(newWorkout);
    })
    }
    catch (err){
        console.log(err);
    }
});


//get a 'range' of workouts
router.get('/range', async (req, res) => {
    try{
        await db.Workout.find({}).sort({id: -1}).limit(7)
        .populate ("exercises")
        .then((allWorkouts) => {
            res.json(allWorkouts);
        })
    }
    catch (err){
        console.log(err);
    }
});



module.exports = router;
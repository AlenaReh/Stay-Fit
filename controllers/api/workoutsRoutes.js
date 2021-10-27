const router = require("express").Router();
const db = require("../../models");

//get route for your last workout
router.get('/', (req, res) => {
    db.Workout.find({})
    .then(getWorkout => {
        re.json(getWorkout);

    })
    .catch (err => {
        res.json(err);
    })
});

//post route for adding a new workout
router.post('/', async (req, res) => {
    try{
        const newWorkout = await db.Workout.create({})
        res.json(newWorkout)
    }
    catch (err){
        console.log(err)
    }
});

//put router by id for update

//get a 'range' of workouts


module.exports = router;
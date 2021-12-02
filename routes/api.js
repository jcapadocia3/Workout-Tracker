const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./homeRoutes.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((data) => {
            console.log ('Workout: ', data);
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
});

module.exports = router;
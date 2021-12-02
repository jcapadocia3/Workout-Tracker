const db = require("../models");
const router = require("express").Router();

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err)
  });
});

module.exports = router;
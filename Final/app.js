const express = require('express');
const mg = require('mongoose');
const bd = require('body-parser');
const TimeTable = require('./Models/time_table_model');

const app = express();
const router = express.Router()
const db = mg.connect('mongodb://localhost/FINAL');
const port = 8082


app.use(bd.urlencoded({ extended: true }));

app.use(bd.json());

router
  .route("/")
  .post((req, res) => {
    const timeTable = new TimeTable(req.body);
    timeTable.save();
    return res.status(201).json(timeTable);
  })
  .get((req, res) => {
    const query = {};
    if (req.query.Course_Number) {
      query.Course_Number = req.query.Course_Number;
    }
    TimeTable.find(query, (err, timeTable) => {
      if (err) {
        return res.send(err);
      }
      return res.json(timeTable);
    });
  });

  router.use("/:id", (req, res, next) => {
    TimeTable.findById(req.params.id, (err, timeTable) => {
      if (err) {
        return res.send(err);
      }
      if (timeTable) {
        req.timeTable = timeTable;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  router.route("/:id")
    .delete((req, res) => {
      req.timeTable.remove((err) => {
        if (err) {
          return res.send(err);
      }
        return res.json(TimeTable);
    });
  })
    .put((req, res) => {
      const { timeTable } = req;
      timeTable.Day_Time = req.body.Day_Time;
      timeTable.Course_Number = req.body.Course_Number;
      timeTable.Location = req.body.Location;
      timeTable.Instructor = req.body.Instructor;
      timeTable.save();
      return res.json(timeTable);
    })
    .get((req, res) => res.json(timeTable));

app.use("/apis", router);


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});



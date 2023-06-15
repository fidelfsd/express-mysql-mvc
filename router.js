const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const studentsRouter = require("./routes/students");

router.use("/", indexRouter);
router.use("/students", studentsRouter);

module.exports = router;

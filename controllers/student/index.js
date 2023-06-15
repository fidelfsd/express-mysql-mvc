const studentController = {};

studentController.fetchAll = require("./fetchAll");
studentController.getById = require("./getById");
studentController.create = require("./create");
studentController.update = require("./update");
studentController.delete = require("./delete");

module.exports = studentController;

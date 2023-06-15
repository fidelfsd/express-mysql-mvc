const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student");

/* GET users listing. */
router.get("/", studentController.fetchAll);

// OBTENER ESTUDIANTE POR ID
router.get("/:id", studentController.getById);

// AÑADIR NUEVO ESTUDIANTE
router.post("/create", studentController.create);

// MODIFICAR UN ESTUDIANTE YA EXISTENTE
router.put("/update/:id", studentController.update);

// BORRAR DESDE UN ESTUDIANTE
router.delete("/delete/:id", studentController.delete);

module.exports = router;

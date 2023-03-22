const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.post("/", async (req, res, next) => {
  try {
    const data = await DataController.insertData(
      req.body.username,
      req.body.clave
    );
    res.json(data);
  } catch (err) {
    console.error("Error al Insertar:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;

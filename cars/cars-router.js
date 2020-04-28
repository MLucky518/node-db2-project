const express = require("express");
const router = express.Router();
const db = require("../data/config");

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("Cars");
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // const car = await db("cars").where("id", req.params.id).first();
    const { id } = req.params;
    const car = await db("cars").where({ id }).first();
    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const carInfo = req.body;
    const [id] = await db("cars").insert(carInfo);
    const newCar = await db("cars").where({ id });
    res.json(newCar);
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;

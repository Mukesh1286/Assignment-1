const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
} = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/createBrand", authMiddleware, isAdmin, createBrand);
router.put("/updateBrand/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/deleteBrand/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/getBrand/:id", getBrand);
router.get("/getallBrand", getallBrand);

module.exports = router;
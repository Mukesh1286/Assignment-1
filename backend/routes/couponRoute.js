const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon
} = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/createCoupon", authMiddleware, isAdmin, createCoupon);
router.get("/getAllCoupons", authMiddleware, isAdmin, getAllCoupons);
router.get("/getall/:id", authMiddleware, isAdmin, getCoupon);
router.put("/updateCoupon/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/deleteCoupon/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
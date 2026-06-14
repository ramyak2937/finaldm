const express = require("express");
const Registration = require("../models/Registration");

const router = express.Router();

console.log("Dashboard Routes Loaded ✅");

// Get all registrations
router.get("/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find();

    res.json({
      success: true,
      data: registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
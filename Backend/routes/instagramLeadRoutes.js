const express = require("express");
const InstagramLead = require("../models/InstagramLead");

const router = express.Router();

router.get("/instagram-leads", async (req, res) => {
  try {
    const leads = await InstagramLead.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
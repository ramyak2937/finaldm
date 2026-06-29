const express = require("express");
const router = express.Router();
const axios = require("axios");
const Registration = require("../models/Registration");

router.post("/register", async (req, res) => {
  console.log("REGISTER API HIT");

  try {
    console.log("Received:", req.body);

    const data = await Registration.create(req.body);

    const { name, email, phone } = req.body;

    // n8n call (optional)
    try {
      await axios.post("http://localhost:5678/webhook/register", {
        name,
        email,
        phone,
      });

      console.log("✅ Sent to n8n");
    } catch (err) {
      console.log("⚠️ n8n not running or webhook inactive");
    }

    console.log("Saved:", data);

    res.status(201).json({
      success: true,
      data,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
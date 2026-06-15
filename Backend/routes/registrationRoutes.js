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
await axios.post("http://localhost:5678/webhook-test/register", {
      name,
      email,
      phone
    });
            
    console.log("Saved & sent to n8n:", data);

    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
const express = require("express");
const router = express.Router();

const VERIFY_TOKEN = "RK_editzz_2026";

// Meta Webhook Verification
router.get("/instagram-webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log("Meta Verification Request Received");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook Verified Successfully");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

router.post("/instagram-webhook", async (req, res) => {
  console.log("🔥 WEBHOOK RECEIVED 🔥");

  const entry = req.body.entry?.[0];
  const change = entry?.changes?.[0];

  if (change?.field === "comments") {
    const commentText = change.value.text;

    console.log("Comment:", commentText);

    if (commentText.toLowerCase().includes("link")) {
      console.log("✅ LINK COMMENT DETECTED");
    }
  }

  res.status(200).send("EVENT_RECEIVED");
});
module.exports = router;
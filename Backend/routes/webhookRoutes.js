const express = require("express");
const router = express.Router();
const axios = require("axios");

const InstagramLead = require("../models/InstagramLead");
const sendPrivateReply = require("../services/sendPrivateReply");

const VERIFY_TOKEN = "RK_editzz_2026";

// Meta Verification
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

// Instagram Webhook
router.post("/instagram-webhook", async (req, res) => {
  console.log("🔥 WEBHOOK RECEIVED 🔥");
  console.log("BODY:", JSON.stringify(req.body, null, 2));

  try {
    const entry = req.body.entry?.[0];
    const change = entry?.changes?.[0];

    if (change?.field === "comments") {
      const commentText = change.value?.text || "";

      console.log("💬 Comment:", commentText);

      if (commentText.toLowerCase().includes("link")) {
        console.log("✅ LINK COMMENT DETECTED");

        // Save to MongoDB
        await InstagramLead.create({
          username: change.value?.from?.username,
          comment: commentText,
          instagramUserId: change.value?.from?.id,
          mediaId: change.value?.media?.id,
        });

        console.log("💾 Lead Saved To MongoDB");

        // Send data to n8n
        try {
          await axios.post(
            "https://passive-dupe-spectrum.ngrok-free.dev/webhook/instagram-comment",
            {
              username: change.value?.from?.username,
              comment: commentText,
              instagramUserId: change.value?.from?.id,
              mediaId: change.value?.media?.id,
            }
          );

          console.log("📤 Data Sent To n8n");
        } catch (err) {
          console.log("❌ n8n Error");
          console.log(err.response?.data || err.message);
        }

        // Send Instagram Private Reply
console.log("Comment ID:", change.value.id);

// Send Instagram Private Reply

console.log("Comment ID:", change.value.id);
console.log("Instagram User ID:", change.value.from?.id);

try {
  await sendPrivateReply(change.value.id);
  console.log("📩 Private Reply Sent");
} catch (err) {
  console.log("❌ Private Reply Failed");
  console.log(err.response?.data || err.message);
}
      }
    } else {
      console.log("⚠️ Not a comment event");
    }

    res.status(200).send("EVENT_RECEIVED");
  } catch (error) {
    console.error("❌ Webhook Error:", error);
    res.status(500).send("ERROR");
  }
});

module.exports = router;
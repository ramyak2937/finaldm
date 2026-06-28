const express = require("express");
const router = express.Router();

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

        await InstagramLead.create({
          username: change.value?.from?.username,
          comment: commentText,
          instagramUserId: change.value?.from?.id,
          mediaId: change.value?.media?.id,
        });

        console.log("💾 Lead Saved To MongoDB");

        // Send Private Reply
        await sendPrivateReply(change.value.id);

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
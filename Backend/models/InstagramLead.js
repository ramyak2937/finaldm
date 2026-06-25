const mongoose = require("mongoose");

const instagramLeadSchema = new mongoose.Schema(
  {
    username: String,
    comment: String,
    instagramUserId: String,
    mediaId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "InstagramLead",
  instagramLeadSchema
);
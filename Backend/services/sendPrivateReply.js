const axios = require("axios");

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const sendPrivateReply = async (commentId) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v25.0/${commentId}/private_replies`,
      {
        message:
          "👋 Hi! Thanks for your interest.\n\nRegister here:\nhttps://finaldm.vercel.app/registration",
      },
      {
        params: {
          access_token: PAGE_ACCESS_TOKEN,
        },
      }
    );

    console.log("✅ Private Reply Sent");
    console.log(response.data);
  } catch (error) {
    console.error(
      "❌ Private Reply Error:",
      error.response?.data || error.message
    );
  }
};

module.exports = sendPrivateReply;
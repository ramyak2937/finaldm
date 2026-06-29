const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const webhookRoutes = require("./routes/webhookRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// IMPORTANT ROUTE MOUNT
app.use("/api/webhook", webhookRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

const PORT = process.env.PORT || 5678;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
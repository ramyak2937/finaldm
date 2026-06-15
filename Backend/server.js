const express = require("express");
console.log("NEW SERVER FILE LOADED 🚀");

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const registrationRoutes = require("./routes/registrationRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const webhookRoutes = require("./routes/webhookRoutes");
dotenv.config();
console.log("Instagram ID:", process.env.INSTAGRAM_BUSINESS_ID);
console.log("Token Loaded:", process.env.INSTAGRAM_ACCESS_TOKEN ? "YES" : "NO");
const app = express();
app.get("/ramya", (req, res) => {
  res.send("Ramya Route Working ✅");
});

app.use(cors());
app.use(express.json());

app.use("/api", registrationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", dashboardRoutes);
app.use("/api/webhook", webhookRoutes);
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});
app.get("/api/test-dashboard", (req, res) => {
  res.send("Dashboard Direct Test ✅");
});

async function startServer() {
  try {
    console.log("URI:", process.env.MONGODB_URI);

    await connectDB();

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Running on Port 5000");
    });
  } catch (error) {
    console.error("Server Startup Error:", error);
  }
}

startServer();
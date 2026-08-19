require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
  res.json({
    message: "Kinetrexa Portfolio Backend is running!",
  });
});

// =========================
// CREATE CONTACT MESSAGE
// =========================

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// =========================
// GET CONTACT MESSAGES
// =========================

app.get("/api/contact", async (req, res) => {
  try {
    const messages = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (error) {
    console.error("Fetch contacts error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// =========================
// SERVER + MONGODB
// =========================

const PORT = process.env.PORT || 5000;

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected successfully");

      app.listen(PORT, () => {
        console.log(
          `Server running on http://localhost:${PORT}`
        );
      });
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
} else {
  console.log(
    "MONGO_URI not found. Running without MongoDB."
  );

  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}`
    );
  });
}
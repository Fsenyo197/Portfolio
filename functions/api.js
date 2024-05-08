const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const api = express();
const router = express.Router();

// Middleware
api.use(bodyParser.json());
api.use(cors({
  origin: '*', // Allow requests from any origin (replace '*' with specific origins for better security)
  methods: ['GET', 'POST'], // Allow only GET and POST requests
  allowedHeaders: ['Content-Type'], // Allow only Content-Type header
}));

// Default route to check if the app is running
router.get("/", (req, res) => {
  res.send("MailServer is running..");
});

// Route to send an email
router.post("/send-email", async (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'psenyo197@gmail.com', // Replace with your Gmail email
      pass: 'nlly nfvu euar yzpk', // Replace with your Gmail password or app-specific password
    }
  });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "psenyo197@gmail.com", // Destination email
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Message sent: %s", info.messageId);

    res.sendStatus(200); // Send success response
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email"); // Send error response
  }
});

// Mounting the router at the specified path
api.use("/.netlify/functions/api", router);

// Export handler for serverless deployment
module.exports = api;
module.exports.handler = serverless(api);

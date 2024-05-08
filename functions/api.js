const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const api = express();
const router = express.Router();

// Middleware
api.use(bodyParser.json());

// CORS settings
api.use((req, res, next) => {
  //res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

// Default route to check if the app is running
router.get("/", (req, res) => {
  res.send("MailServer is running..");
});

// Route to send an email
router.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
  }

  try {
    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'psenyo197@gmail.com', // Replace with your Gmail email
        pass: 'nlly nfvu euar yzpk', // Replace with your Gmail password or app-specific password
      }
    });

    // Send email
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.DESTINATION_EMAIL,
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

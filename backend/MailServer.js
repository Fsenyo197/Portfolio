const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Require the cors middleware

const app = express();
app.use(bodyParser.json());

// Use cors middleware
app.use(cors({
  origin: '*', // Allow requests only from http://example.com
  methods: ['GET', 'POST'], // Allow only GET and POST requests
  allowedHeaders: ['Content-Type'], // Allow only Content-Type header
}));
// Define a route to handle form submissions
app.post("/send-email", async (req, res) => {
  // Extract form data from the request body
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'psenyo197@gmail.com',
      pass: 'nlly nfvu euar yzpk',
    }
  });

  // Send email
  try {
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // Use user's provided name and email as sender
      to: "psenyo197@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Message sent: %s", info.messageId);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email"); // Send error response
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

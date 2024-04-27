const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

// Define a route to handle form submissions
app.post("/send-email", async (req, res) => {
  // Extract form data from the request body
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    // Configure your email service provider here
  });

  // Send email
  let info = await transporter.sendMail({
    from: '"Your Name" <your-email@example.com>',
    to: "psenyo197@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  console.log("Message sent: %s", info.messageId);

  res.sendStatus(200);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

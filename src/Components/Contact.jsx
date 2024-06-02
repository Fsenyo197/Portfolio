import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://portfolio-mail-server.netlify.app/.netlify/functions/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      console.log("Email sent successfully!");

      // Set submitted to true to display success message
      setSubmitted(true);

      // Reset form fields after submission if needed
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Set a timer to hide the success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 10000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-whitish-blue p-4 sm:pt-4">
      <div className="w-full max-w-lg">
        <div className="text-gray-900 text-3xl font-bold mb-2">
          Ready to vibe?
        </div>
        <div className="text-lg mb-8">Let's make some magic together!</div>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2 text-gray-900 font-bold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2 text-gray-900 font-bold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="subject" className="mb-2 text-gray-900 font-bold">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
              className="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="mb-2 text-gray-900 font-bold">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
              className="border border-gray-300 p-2 h-40"
            />
          </div>
          <button type="submit" className="bg-gray-900 text-white p-2 rounded hover:bg-gray-700">
            Submit
          </button>
        </form>
        {submitted && (
          <div className="text-green-600 text-lg mb-4">
            Submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track form submission

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
      await fetch("http://localhost:3000/send-email", {
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
    <>
      <div className="text-blue-600 text-3xl font-bold mb-2">
        Ready to vibe?
      </div>
      <div className=" text-lg mb-8">Let's make some magic together!</div>
      <div className="hidden lg:block">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex">
            <div className="flex flex-col mr-4">
              <label htmlFor="name" className="mb-2 text-blue-600 font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                style={{ width: "275px" }}
                required
                className="border border-gray-300 p-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-blue-600 font-bold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                style={{ width: "275px" }}
                required
                className="border border-gray-300 p-2"
              />
            </div>
          </div>
          <div className="flex flex-col mr-4 mt-4">
            <label htmlFor="subject" className="mb-2 text-blue-600 font-bold">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              style={{ width: "563px" }}
              required
              className="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col mr-4 mt-4">
            <label htmlFor="message" className="mb-2 text-blue-600 font-bold">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              style={{ width: "563px", height: "150px" }} // Specify the width and height
              required
              className="border border-gray-300 p-2"
            />
          </div>

          <button
            type="submit"
            style={{ width: "563px" }}
            className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="lg:hidden">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-blue-600 font-bold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="border border-gray-300 p-1 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-blue-600 font-bold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="border border-gray-300 p-1 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="mb-2 text-blue-600 font-bold">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
              className="border border-gray-300 p-1 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-blue-600 font-bold">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
              className="border border-gray-300 p-8 mb-4"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>

      {/* Render success message if form is submitted successfully */}
      {submitted && (
        <div className="text-green-600 text-lg mb-4">
          Submitted successfully!
        </div>
      )}

    </>
  );
}

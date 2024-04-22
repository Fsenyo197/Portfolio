import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

    const serviceId = "service_ufjfhlc";
    const templateId = "template_7a26qlr";
    const userId = "JWm56qt5S9pnaxXTs";

    try {
      // Send email using Email.js
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        userId
      );

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    // Reset form fields after submission if needed
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div className="text-blue-600 text-3xl font-bold mb-2">
        Ready to vibe?
      </div>
      <div className=" text-lg mb-8">Let's make some magic together!</div>
      <div className="hidden sm:block">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex">
            {/* Name */}
            <div className="flex flex-col mr-4">
              <label htmlFor="name" className="mb-2 text-blue-600 font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                style={{ width: "300px" }} // Specify the width
                required
                className="border border-gray-300 p-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-blue-600 font-bold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                style={{ width: "300px" }} // Specify the width
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
              style={{ width: "613px" }} // Specify the width
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
              style={{ width: "613px", height: "150px" }} // Specify the width and height
              required
              className="border border-gray-300 p-2"
            />
          </div>

          <button
            type="submit"
            style={{ width: "613px" }}
            className="mt-4 bg-blue-600 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="sm:hidden">
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
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

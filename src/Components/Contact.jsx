import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
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
      <div>
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
            Send Me an Email
          </button>
        </form>
      </div>
    </>
  );
}

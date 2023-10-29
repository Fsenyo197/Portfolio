import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <label htmlFor="">Contact</label>
        <form action="">
          <label htmlFor="Name">Name: </label>
          <input type="textarea" />
          <label htmlFor="Email">Email: </label>
          <input type="textarea" />
          <button type="Submit">Send</button>
        </form>
      </div>
    </>
  );
}

// import { div } from "framer-motion/client"
import { useState } from "react";
import "./ContactForm.css";


export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, message });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Contact Form</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />

          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            required
            autoComplete="off"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-textarea"
          ></textarea>

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

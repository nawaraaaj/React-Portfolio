import React, { useRef } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="user_name" required />
          <input type="email" className="email" placeholder="Your Email" name="user_email" required />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/nawaraaaj" target="_blank" rel="noopener noreferrer">
              <FaGithub className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/nawaraj-neupane-8977a32a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

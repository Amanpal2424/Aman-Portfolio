import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j4ceglg",    // Replace with your EmailJS service ID
        "template_uw7gda6",   // Replace with your EmailJS template ID
        form.current,
        "r2EjeSDcP9wxVEfo8"      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Clears the form after sending
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

      <div className="contact-container">
        {/* Left side contact info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> pal028696@gmail.com</p>
          <p><strong>Phone:</strong> +91 6395074508</p>
          <p><strong>Location:</strong> Bareilly, India</p>
        </div>

        {/* Right side contact form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

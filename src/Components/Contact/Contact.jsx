import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";

function Contact() {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = formRef.current || e.target;
    const button =
      form.querySelector("button[type='submit']") ||
      e.nativeEvent?.submitter ||
      document.activeElement;

    const originalText = button?.textContent || "Send Message";

    if (button) {
      button.textContent = "Sending...";
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
    }

    try {   
      // 1. Send to YOU
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Send auto-reply to USER
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,  
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", { position: "top-center" });

      if (button) button.textContent = "Message Sent!";

      setTimeout(() => {
        if (button) {
          button.textContent = originalText;
          button.disabled = false;
          button.removeAttribute("aria-busy");
        }
        form.reset();
      }, 2000);
    } catch (err) {
      console.error("EmailJS send error:", err);
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
      });

      if (button) {
        button.textContent = originalText;
        button.disabled = false;
        button.removeAttribute("aria-busy");
      }
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <section id="contact" className="contact fade-in">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-sub">Ready to bring your ideas to life?</p>

        <div className="contact-grid">
          {/* Left side - form */}
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="input-box">
              <input type="text" name="subject" placeholder=" " />
              <label>Subject (Optional)</label>
            </div>

            <div className="input-box">
              <input type="text" name="user_name" required placeholder=" " />
              <label>Name</label>
            </div>

            <div className="input-box">
              <input type="email" name="user_email" required placeholder=" " />
              <label>Email</label>
            </div>

            <div className="input-box">
              <textarea
                name="user_message" // 
                rows="8"
                required
                placeholder=" "
              ></textarea>
              <label>Message</label>
            </div>

            {/* Hidden field for time */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button type="submit">Send Message</button>
          </form>

          {/* Right side - info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-subtitle">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hello, feel free
              to reach out!
            </p>

            <p className="email">
              <i className="fa-solid fa-envelope"></i>{" "}
              aquino.rionkurt@gmail.com
            </p>

            <div className="social-icons">
              {/* socials */}
            </div>

            <button className="cv-btn">
              <a
                href="/files/Kurt Rion Aquino CV.pdf"
                download="Kurt Rion Aquino CV.pdf"
              >
                Download My CV
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

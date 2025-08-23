import React from 'react'
import emailjs from "emailjs-com";
import './Contact.css'

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    const button = e.target.querySelector("button[type='submit']");
    const originalText = button.textContent;

    // Button feedback
    button.textContent = "Sending...";
    button.disabled = true;

    // EmailJS call
    emailjs.sendForm(
      "service_xqml87s",   // <--  EmailJS Service ID
      "template_fv8561n",  // <--  EmailJS Template ID
      e.target,
      "cFpMg9B_P_saFPOea"    // <-- API public key
    ).then(() => {
      button.textContent = "Message Sent!";
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        e.target.reset();
      }, 2000);
    }, (error) => {
      alert("Error: " + error.text);
      button.textContent = originalText;
      button.disabled = false;
    });
  };

  return (
    <div>
      <section id="contact" className="contact fade-in">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-sub">Ready to bring your ideas to life?</p>

            <div className="contact-grid">
              {/* Left side - form */}
              <form onSubmit={sendEmail} className="contact-form">
                <div className="input-box">
                  <input type="text" id="name" required placeholder=" " />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="input-box">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-box">
                  <textarea id="message" rows="5" required placeholder=" "></textarea>
                  <label htmlFor="message">Message</label>
                </div>

                <button type="submit">Send Message</button>
              </form>

              {/* Right side - info */}
              <div className="contact-info">
                <h3 className='contact-info-title'>Get In Touch</h3>
                <p className='contact-info-subtitle'>
                  I'm always interested in new opportunities and exciting projects. Whether you have a question 
                  or just want to say hello, feel free to reach out!
                </p>

                <p className="email"><i className="fa-solid fa-envelope"></i> aquino.rionkurt@gmail.com</p>

                <div className="social-icons">
                  <a 
                  href="https://www.linkedin.com/in/kurt-rion-aquino-90aa22375/"
                  title="Go to linkedIn account"
                  target='_blank'
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a 
                  href="https://github.com/k-rion"
                  title="Go to github account"
                  target='_blank'
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>

                  <a 
                  href="https://www.facebook.com/kurtrion.aquino"
                  title="Go to facebook account"
                  target='_blank'
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>

                  <a 
                  href="https://www.instagram.com/queue_queueee/"
                  title="Go to instagram account"
                  target='_blank'
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

      </section>
    </div>
  )
}

export default Contact

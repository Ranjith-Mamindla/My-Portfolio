import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-text">
          I'm open to collaboration, freelancing, or just a good tech
          conversation!
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/myzebvoj"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            Send Message
          </motion.button>
        </form>

        <div className="contact-icons">
          <motion.a
            href="https://github.com/Ranjith-Mamindla"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="contact-icon"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ranjith-mamindla-880b17287/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="contact-icon"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:ranjithmamindla02@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="contact-icon"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const Home = () => (
  <div className="home">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="h1 heading">
        Hi there,
        <br />
        I'm{" "}
        <span style={{ color: "#00b4d8" }}>
          <Typewriter
            words={[
              "Ranjith Mamindla",
              "a MERN Stack Developer",
              "a Frontend Developer",
              "a Backend Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </span>
        <br />
        Specializing in full-stack solutions
        <br />
        with clean, efficient code.
      </h1>

      <motion.a
        href="../../../tech/RanjithResume.pdf"
        download
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 4px 15px rgba(0, 128, 0, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.button
          type="button"
          className="btn btn-outline-success btn-lg mb-2 cv-btn"
          style={{ borderRadius: "8px" }}
        >
          Download CV
        </motion.button>
      </motion.a>

      <div className="icons">
        <motion.a
          href="https://www.linkedin.com/in/ranjith-mamindla-880b17287/"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <BsLinkedin className="ln" />
        </motion.a>
        <motion.a
          href="https://github.com/Ranjith-Mamindla"
          className="git-link"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <BsGithub className="git" />
        </motion.a>
        <motion.a
          href="mailto:ranjithmamindla02@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="contact-icon"
        >
          <FaEnvelope className="ln" />
        </motion.a>
      </div>
    </motion.div>

    <motion.img
      src="/tech/Home.webp"
      alt="Home"
      className="homeImage"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    />
  </div>
);

export default Home;

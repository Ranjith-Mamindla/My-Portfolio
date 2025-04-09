import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import "./index.css";

const navItems = [
  { path: "/", label: "Home", icon: <FaHome size={18} /> },
  { path: "/about", label: "About", icon: <FaInfoCircle size={18} /> },
  { path: "/skills", label: "Skills", icon: <FaCode size={18} /> },
  { path: "/projects", label: "Projects", icon: <FaFolderOpen size={18} /> },
  { path: "/contact", label: "Contact", icon: <FaEnvelope size={18} /> },
];

const ModernNavbar = () => {
  return (
    <header className="bubble-navbar">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `bubble-nav-link ${isActive ? "active" : ""}`
          }
        >
          <div className={`bubble-icon-wrapper`}>
            {item.icon}
          </div>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </header>
  );
};

export default ModernNavbar;

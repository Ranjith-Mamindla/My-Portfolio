import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, Code, Folder, Mail } from "lucide-react";
import "./index.css";

const navItems = [
  { path: "/", label: "Home", icon: <Home size={20} />, id: "home" },
  { path: "/about", label: "About", icon: <Info size={20} />, id: "about" },
  { path: "/skills", label: "Skills", icon: <Code size={20} />, id: "skills" },
  { path: "/projects", label: "Projects", icon: <Folder size={20} />, id: "projects" },
  { path: "/contact", label: "Contact", icon: <Mail size={20} />, id: "contact" },
];

const ModernNavbar = () => {
  const [active, setActive] = useState("home");

  return (
    <header className="bubble-navbar">
      {navItems.map((item) => (
        <div key={item.id} className="bubble-nav-item" onClick={() => setActive(item.id)}>
          {active === item.id && <div className="bubble-icon-active">{item.icon}</div>}
          <NavLink
            to={item.path}
            className={`bubble-nav-link ${active === item.id ? "active" : ""}`}
          >
            {active !== item.id && item.icon}
            <span>{item.label}</span>
          </NavLink>
        </div>
      ))}
    </header>
  );
};

export default ModernNavbar;

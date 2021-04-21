import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [isActive, toggleActive] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleClick = () => {
    toggleActive(!isActive);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 300;
      if (scrollCheck !== isTop) {
        setIsTop(!isTop);
      }
    });
  });

  return (
    <motion.nav
      className={isTop ? "nav" : "nav scrolled"}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <div className="flex-wrapper">
        <a className="nav__logo" href="#intro">
          Richard Coric
        </a>
        <div
          className={isActive ? "hamburger open" : "hamburger"}
          onClick={handleClick}
        >
          <div className="burger"></div>
        </div>
      </div>
      <ul className={isActive ? "nav__list active" : "nav__list"}>
        <li className="nav__link">
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </li>
        <li className="nav__link">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a href="#blog" onClick={handleClick}>
            Blog
          </a>
        </li>
        <li className="nav__link">
          <a href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;

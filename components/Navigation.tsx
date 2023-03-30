import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Nav() {
  const [isActive, toggleActive] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    toggleActive(!isActive);
  };
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 300;
      if (scrollCheck !== isTop) {
        setIsTop(!isTop);
      }
    });
  });

  return (
    <motion.nav
      className={isTop ? 'nav' : 'nav scrolled'}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    >
      <div className="flexWrapper">
        <a className="navLogo" href="#intro">
          Richard Coric
        </a>
        <button
          className={isActive ? 'hamburger open' : 'hamburger'}
          onClick={handleClick}
          type="button"
        >
          <div className="burger" />
        </button>
      </div>
      <ul className={isActive ? 'navList active' : 'navList'}>
        {
          router.pathname === '/' ? (
            <>
              <li className="navLink">
                <a href="#projects" onClick={handleClick}>
                  Projects
                </a>
              </li>
              <li className="navLink">
                <a href="#about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li className="navLink">
                <a href="#blog" onClick={handleClick}>
                  Blog
                </a>
              </li>
              <li className="navLink">
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </>
          ) : (
            <li className="navLink">
              <Link
                href={
                  router.pathname.split('/')[1] === 'projects'
                    || router.pathname.split('/').length < 3
                    ? '/'
                    : '/blogs'
}
                onClick={handleClick}
              >
                Back
              </Link>
            </li>
          )
        }
      </ul>
    </motion.nav>
  );
}

export default Nav;

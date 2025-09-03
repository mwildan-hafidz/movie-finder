import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top ${scrolled ? 'bg-dark' : 'bg-transparent'}`}
      data-bs-theme="dark"
      style={{ transition: "background 200ms ease" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand h1 mb-0">Movie Finder</span>
      </div>
    </nav>
  );
}

export default Navbar;
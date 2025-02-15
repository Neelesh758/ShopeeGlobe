import React from "react";
import "./footer.css"; // Import external CSS

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-title">ShopeeGlobe</p>
      <p className="footer-text">© {new Date().getFullYear()} All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Terms of Service</a>
        <span>|</span>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}

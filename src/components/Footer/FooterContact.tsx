import React from "react";

export default function FooterContact() {
  return (
    <div>
      <div className="widget">
        <h3>Contact</h3>
        <address>43 Raymouth Rd. Baltemoer, London 3910</address>
        <ul className="list-unstyled links mb-4">
          <li>
            <a href="tel://11234567890">+1(123)-456-7890</a>
          </li>
          <li>
            <a href="tel://11234567890">+1(123)-456-7890</a>
          </li>
          <li>
            <a href="mailto:info@mydomain.com">info@mydomain.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

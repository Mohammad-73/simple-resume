import React from "react";

export default function SocialLinks({ socialLinks }) {
  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a href={link.url} key={link.url}>
          <i className={`fa ${link.iconClassName}`}></i>
        </a>
      ))}
    </div>
  );
}

import React from "react";
import email from "../../img/email_icon2.png";
import github from "../../img/github_icon.png";
import linkedin from "../../img/linkedin_icon.png";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="mailto:camdenwhirl@gmail.com">
        <img src={email} alt="email" />
      </a>

      <a href="https://github.com/CWhirl">
        <img src={github} alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/camden-whirl-1112591b0/">
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  );
}

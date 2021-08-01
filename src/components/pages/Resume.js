import React from "react";
import "../../styles/Components.css";
import resume from "../../img/Camden-Whirl-Resume.jpg";

export default function Resume() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        <a href="https://drive.google.com/file/d/1gbrbGTFpU6zAptc8VLCva_YWzaA7yQbi/view?usp=sharing">
          PDF Link
        </a>
      </p>
      <img src={resume} alt="resume" />
    </div>
  );
}

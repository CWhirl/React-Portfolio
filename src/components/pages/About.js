import React from "react";
import "../../styles/Components.css";
import { Chip, Avatar } from '@material-ui/core';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="https://avatars.githubusercontent.com/u/68519564?u=e858753e5aa15ad239fc85aba5589d8545aaf23b&v=4" alt="avatar" />
      <div className="about-info">
        <div className="skills">
        <Chip variant="outlined" label="CSS" color="primary" avatar={<Avatar>C</Avatar>} />
        <Chip variant="outlined" label="JavaScript" color="primary" avatar={<Avatar>J</Avatar>} />
        <Chip variant="outlined" label="React" color="primary" avatar={<Avatar>R</Avatar>} />
        <Chip variant="outlined" label="Node.JS" color="primary" avatar={<Avatar>N</Avatar>} />
        <Chip variant="outlined" label="Express" color="primary" avatar={<Avatar>E</Avatar>} />
        </div>
        <p>
          I'm a Full Stack Web Developer recently graduated from the University of Denver's 
          Full-Stack Web Developer program. I've been working with the MERN stack as well as
          some other libraries and frameworks for the past year. I also have experience with
          Java, Python and C++. I've been coding and learning coding since I was about 13
          years old, and i'm currently looking for my next opportunity to learn, work and
          refine my skills in development.
        </p>
      </div>
    </div>
  );
}

export default About;


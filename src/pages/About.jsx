import React from "react";

const About = () => {
  return (
    <div className="container text-center">
      <h1 className="my-5">About Me</h1>
      <p className="my-3">
        My name's Ahmed Kamal, Student at 6 October Technology University "OTU".
      </p>
      <a
        href="https://www.linkedin.com/in/ahmedkamaldev/"
        className="text-decoration-none"
        target="_blank" rel="noreferrer"
      >
        <i
          className="fa-brands fa-linkedin-in mx-2"
          style={{ fontSize: "50px" }}
        ></i>
        <p className="d-inline" style={{ fontSize: "40px" }}>
          Ahmed Kamal
        </p>
      </a>{" "}
    </div>
  );
};

export default About;

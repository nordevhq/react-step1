import React from "react";
import Navigator from "../components/Layout/Navbar/NavigatorDesktop";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Navigator />
      <Container>
        <h1>About Page</h1>
      </Container>
    </>
  );
}

export default About;

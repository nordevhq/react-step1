import React from "react";
import Navigator from "../../components/Layout/Navbar/NavigatorDesktop";
import { Container } from "react-bootstrap";

function Error() {
  return (
    <>
      <Navigator />
      <Container>
        <h1>Error Page 404</h1>
      </Container>
    </>
  );
}

export default Error;

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 position-fixed bottom-0 w-100">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} EduChatBot. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

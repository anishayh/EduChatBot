import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
        <Container>
          <Navbar.Brand href="/">EduChatBot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Button variant="link" className="nav-link" onClick={handleShow}>
                About
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar Offcanvas */}
      <Offcanvas show={showSidebar} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About EduChatBot</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>EduChatBot is an AI-powered chatbot that helps students with:</p>
          <Button variant="primary" className="w-100 mb-2" onClick={() => { handleClose(); navigate("/instant-answers"); }}>
            Instant Answers
          </Button>
          <Button variant="primary" className="w-100 mb-2" onClick={() => { handleClose(); navigate("/tests"); }}>
            Tests & Quizzes
          </Button>
          <Button variant="primary" className="w-100 mb-2" onClick={() => { handleClose(); navigate("/homework"); }}>
            Homework Assistance
          </Button>
          <Button variant="primary" className="w-100 mb-2" onClick={() => { handleClose(); navigate("/active-recall"); }}>
            Active Recall
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;






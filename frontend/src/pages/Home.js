import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="text-center d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh", overflow: "hidden" }} // Ensures full screen fit
    >
      <h1>Welcome to EduChatBot</h1>
      <p>Your AI-powered study companion.</p>
      <Button variant="primary" className="mt-3" onClick={() => navigate("/signup")}>
        Get Started
      </Button>
    </Container>
  );
};

export default Home;


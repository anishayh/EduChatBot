import React from "react";
import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "80%", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
        <Card.Body>
          <h2 className="text-center mb-4">About EduChatBot</h2>
          <p>
            EduChatBot is an AI-powered educational chatbot designed to assist students with learning, revision, and homework.
            Our chatbot provides interactive learning experiences, including:
          </p>
          <ul>
            <li><strong>Instant Answers:</strong> Get quick responses to academic queries.</li>
            <li><strong>Tests & Quizzes:</strong> Practice with subject-specific tests.</li>
            <li><strong>Homework Assistance:</strong> Get help with assignments.</li>
            <li><strong>Active Recall:</strong> Improve retention through spaced repetition.</li>
          </ul>
          <p className="text-center mt-3">
            EduChatBot is built using **React, Flask, and Bootstrap** to provide a seamless experience for students. Our goal is
            to enhance learning through AI-driven interactions.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;

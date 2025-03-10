import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Chat = () => {
  const navigate = useNavigate();
  const userKey = localStorage.getItem("userKey");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, how can I assist you?" }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!userKey) {
      navigate("/login"); // Redirect if not logged in
    }
  }, [userKey, navigate]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput(""); // Clear input field

    try {
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        user_key: userKey,
        message: input,
      });

      // Add bot response
      setMessages([...newMessages, { sender: "bot", text: response.data.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section>
      <Container className="py-5 d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <Card id="chat2">
            <Card.Header className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
              <Button variant="primary" size="sm">Let's Chat App</Button>
            </Card.Header>

            <Card.Body style={{ position: "relative", height: "400px", overflowY: "auto" }}>
              {messages.map((msg, index) => (
                <div key={index} className={`d-flex flex-row ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"} mb-4`}>
                  {msg.sender === "bot" && (
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="bot avatar" style={{ width: "45px", height: "100%" }} />
                  )}
                  <div>
                    <p className={`small p-2 ${msg.sender === "user" ? "me-3 text-white bg-primary" : "ms-3 bg-body-tertiary"} rounded-3`}>
                      {msg.text}
                    </p>
                  </div>
                  {msg.sender === "user" && (
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="user avatar" style={{ width: "45px", height: "100%" }} />
                  )}
                </div>
              ))}
            </Card.Body>

            <Card.Footer className="text-muted d-flex justify-content-start align-items-center p-3">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar" style={{ width: "40px", height: "100%" }} />
              <Form.Control
                type="text"
                className="form-control form-control-lg mx-2"
                placeholder="Type message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button variant="primary" onClick={sendMessage}>
                <i className="fas fa-paper-plane"></i>
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Chat;

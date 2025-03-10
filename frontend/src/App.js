import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import About from "./pages/About";
import InstantAnswers from "./pages/InstantAnswers";
import Tests from "./pages/Tests";
import Homework from "./pages/Homework";
import ActiveRecall from "./pages/ActiveRecall";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/instant-answers" element={<InstantAnswers />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/active-recall" element={<ActiveRecall />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;






import { useState } from "react";
import "./App.css";
import React from "react";
import About from './components/About';
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} mode={mode} />
        <div
          className={`container px-4 bg-${mode === "light" ? "light" : "dark1"
            } text-${mode === "light" ? "custom-dark" : "light"}`}
        >
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils" />
            } />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;

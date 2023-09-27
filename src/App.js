import PropTypes from "prop-types";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
// import { About } from "./components/About";
import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  function handleAlert(type, msg) {
    setAlert({ type: type, msg: msg });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#495057";
      handleAlert("success", "Dark mode is enabled");
      document.title = "AppUtils: Dark mode enabled";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("success", "Light mode is enabled");
      document.title = "AppUtils: Light mode enabled";
    }
    setTimeout(() => {
      document.title = "AppUtils: Home";
    }, 2000);
  }
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      {/* <Routes>
        <Route
          path="/"
          element={
            <Textform
              heading="This is my heading"
              mode={mode}
              handleAlert={handleAlert}
            ></Textform>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <div className="container">
              <About></About>
            </div>
          }
        ></Route>
      </Routes> */}
      <Textform
        heading="This is my heading"
        mode={mode}
        handleAlert={handleAlert}
      ></Textform>
    </>
  );
}
export default App;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

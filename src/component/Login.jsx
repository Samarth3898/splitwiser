import React, { useState } from "react";
import { Box } from "@mui/material";
import "./Login.css";
import Button from "@mui/material/Button";
import ReCAPTCHA from "react-google-recaptcha";

// Inside the Login component

const Login = () => {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    setVerified(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    console.log("Username:", username);
    console.log("Password:", password);

    if (username == "hello" && password == "world") {
      alert("Login successful!");
    } else {
      alert("You died");
    }
    // basic logic for checking if it is working or not
    // Add logic to handle form submission (e.g., login authentication)
  };

  return (
    <div>
      <h2 className="login-header">Log in</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username/Email:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <Button type="submit" variant="contained" disabled={!verified}>
          Login
        </Button>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Login;

import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux';
import { login, selectIsLoggedIn} from '../../authentication/authSlice';

const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLoggedIn = useSelector(selectIsLoggedIn);
 

  // State
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Redirect to the welcome page if already logged in
    if (isLoggedIn) {
      navigate('/expense-tracker');
    }
  }, [isLoggedIn, navigate]);

  // Toggle between login and sign up modes
  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    const authEndpoint = isLogin ? "signInWithPassword" : "signUp";

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${authEndpoint}?key=AIzaSyBq19knWGgaE6RYM_LTx_TcdzssH1Ks7OE`;

    try {
      const response = await axios.post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      });
      dispatch(login({'token':response.data.idToken, 'userEmail': response.data.email}));
      navigate("/complete-profile");
    } catch (error) {
      alert(error.message || "Authentication failed!");
    }

    setIsLoading(false);
  };

  return (
    <Container className="mt-5">
      <div className="login-container">
        <h2 className="login-header">{isLogin ? "Login" : "Sign Up"}</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" required ref={emailInputRef} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" required ref={passwordInputRef} />
          </Form.Group>

          <div>
            <Button type="submit" disabled={isLoading}>
              {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
            </Button>
            {isLoading && <p className="loading">Sending request....</p>}
          </div>
        </Form>

        <div className="button2">
          <Button className="bg-white" onClick={toggleMode}>
            {isLogin ? "Create New Account" : "Login with Existing Account"}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;

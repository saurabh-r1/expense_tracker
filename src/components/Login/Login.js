import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBq19knWGgaE6RYM_LTx_TcdzssH1Ks7OE', {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <div className="login-container">
        <h1 className="login-header">SignUp</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required ref={emailInputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required ref={passwordInputRef} />
          </Form.Group>

          <Button variant="primary" type="submit">
            CREATE ACCOUNT
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;

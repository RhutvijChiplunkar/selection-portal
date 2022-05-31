import React from 'react';
import { Button, Form } from "react-bootstrap";
import './Signup.css';


const Signup = () => {
    return (
        <div className="signup-forms">
            <Form>
                <h2 className="title">Signup</h2>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <a href='/'>Already have an account? Login</a><br /><br />

                <Button variant="primary" type="submit">
                    Signup
                </Button>

            </Form>
        </div>
    );
}

export default Signup;
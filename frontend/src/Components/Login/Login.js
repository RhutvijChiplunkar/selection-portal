import { Form, Button } from "react-bootstrap";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="login-forms">
            <Form>
                <h2 className="title">Login</h2>
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

                <a href='/Signup'>New here? Register</a><br /><br />

                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    )
}

export default Login;
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registration() {
    return (
        <div>
        <h2>Register</h2>
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Form.Text className="text-muted">
            Already have an Account
        </Form.Text>
        <Button variant="primary" type="submit">
            Login
        </Button>
            
        </Form>
        </div>
    </div>
    )
}

export default Registration

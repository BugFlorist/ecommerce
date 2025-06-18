import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div>
        <h2>Checkout Page</h2>
        <p>Please fill out your personal information to complete your purchase. </p>
    
        <Form>
        <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>

        <Link to='/confirmation' className="btn btn-primary">
            Place Order
        </Link>
        </Form>
    
    
    
    </div>

  );
}

export default Checkout;
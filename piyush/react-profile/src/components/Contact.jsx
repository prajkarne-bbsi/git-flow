import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactSection = () => (
  <section id="contact">
    <h2 className="mb-3">Contact</h2>
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Name..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Message..." />
      </Form.Group>
      <Button variant="primary">
        Send
      </Button>
    </Form>
  </section>
);

export default ContactSection;
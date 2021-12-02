import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { signOutUser } from '../api/auth';

export default function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">My Art</Nav.Link>
              <Nav.Link href="/inspos">Inspos</Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <button
                onClick={signOutUser}
                type="button"
                className="btn btn-danger"
              >
                Logout
              </button>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

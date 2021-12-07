import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
              <Nav.Link href="/searchArt">Search Your Art</Nav.Link>
              <Nav.Link href="/searchInspos">Search Inspos</Nav.Link>
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

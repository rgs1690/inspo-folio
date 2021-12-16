import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { signOutUser } from '../api/auth';

const navLinkStyle = {
  color: '#A9CEF4',
};

const navStyle = {
  backgroundColor: 'transparent',
  marginBottom: '1em',
};
export default function NavBar() {
  return (
    <div>
      <>
        <Navbar style={navStyle}>
          <Container>
            <Navbar.Brand href="/">
              {' '}
              <img
                src="https://dozitgaqgnfnfsxezhpg.supabase.in/storage/v1/object/public/capstone/NavLogo.png"
                width="150"
                height="150"
                // className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link style={navLinkStyle} href="/">
                My Art
              </Nav.Link>
              <Nav.Link style={navLinkStyle} href="/inspos">
                Inspos
              </Nav.Link>
              <Nav.Link style={navLinkStyle} href="/searchArt">
                Search Your Art
              </Nav.Link>
              <Nav.Link style={navLinkStyle} href="/searchInspos">
                Search Inspos
              </Nav.Link>
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

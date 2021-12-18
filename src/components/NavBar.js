import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { signOutUser } from '../api/auth';

const NavBarStyle = styled.div`
  button {
    margin-left: 25em;
    width: 5em;
    height: 3em;
  }
  .nav {
    display: flex;
  }
`;

const navLinkStyle = {
  color: '#A9CEF4',
  fontSize: '2em',
  marginRight: '1em',
};

export default function NavBar() {
  return (
    <div>
      <>
        <NavBarStyle>
          <Navbar className="nav">
            <Container>
              <Navbar.Brand href="/">
                {' '}
                <img
                  src="https://dozitgaqgnfnfsxezhpg.supabase.in/storage/v1/object/public/capstone/NavLogo.png"
                  width="100"
                  height="100"
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
        </NavBarStyle>
      </>
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation({
  func, backgroundColor, color, width,
}) {
  const navStyle = {
    width,
  };
  const style = {
    backgroundColor,
    color,
  };
  return (
    <div>
      <>
        <Navbar style={navStyle}>
          <Container style={style}>
            <Navbar.Brand style={style} href="/">
              Navbar
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link style={style} href="/">
                My Art
              </Nav.Link>
              <Nav.Link style={style} href="/inspos">
                Inspos
              </Nav.Link>
              <Nav.Link style={style} href="/searchArt">
                Search Your Art
              </Nav.Link>
              <Nav.Link style={style} href="/searchInspos">
                Search Inspos
              </Nav.Link>
              <button onClick={func} type="button" className="btn btn-danger">
                Logout
              </button>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
Navigation.propTypes = {
  func: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
};
Navigation.defaultProps = {
  func: () => console.warn('LOGOUT'),
  backgroundColor: '',
  color: '',
  width: '',
};

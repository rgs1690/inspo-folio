import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';
import { signInUser } from '../api/auth';

const SignInStyle = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 2em;
  }
`;
export default function SignIn({ user }) {
  return (
    <SignInStyle>
      <>
        {user === null ? (
          <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="primary" />
          </>
        ) : (
          <>
            <img
              src="https://dozitgaqgnfnfsxezhpg.supabase.in/storage/v1/object/public/capstone/homeImage.png"
              alt="logo"
            />
            <div className="text-center mt-5">
              <h1>Sign in to get started!</h1>
              <button type="button" className="btn" onClick={signInUser}>
                Sign In
              </button>
            </div>
          </>
        )}
      </>
    </SignInStyle>
  );
}
SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};

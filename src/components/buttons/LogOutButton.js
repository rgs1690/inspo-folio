import React from 'react';
import PropTypes from 'prop-types';
// import { signOutUser } from '../../api/auth';
// import { signOutUser } from '../../api/auth';

export default function LogOutButton({
  label,
  backgroundColor = 'red',
  size = 'md',
  func,
}) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
  };

  return (
    <div>
      <button type="button" onClick={func} style={style}>
        {label}
      </button>
    </div>
  );
}
LogOutButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  func: PropTypes.func,
};
LogOutButton.defaultProps = {
  label: '',
  backgroundColor: '',
  size: 'sm',
  func: () => console.warn('signOut'),
};

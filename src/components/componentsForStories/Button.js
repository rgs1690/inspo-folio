import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  label,
  backgroundColor = 'red',
  size = 'md',
  func,
  color,
  border,
  borderRadius,
}) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border,
    color,
    borderRadius,
  };

  return (
    <div>
      <button type="button" onClick={func} style={style}>
        {label}
      </button>
    </div>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  func: PropTypes.func,
  color: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
};
Button.defaultProps = {
  label: '',
  backgroundColor: '',
  size: 'sm',
  func: () => console.warn('signOut'),
  color: '',
  border: '',
  borderRadius: '5px',
};

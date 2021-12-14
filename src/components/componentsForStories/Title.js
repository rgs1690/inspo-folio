import React from 'react';
import PropTypes from 'prop-types';

export default function Title({
  text, color, fontSize, fontFamily,
}) {
  const style = {
    color,
    fontSize,
    fontFamily,
  };
  return (
    <div>
      <h1 style={style}>{text}</h1>
    </div>
  );
}
Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
};
Title.defaultProps = {
  text: 'TITLE',
  color: '',
  fontSize: '',
  fontFamily: 'sans-serif',
};

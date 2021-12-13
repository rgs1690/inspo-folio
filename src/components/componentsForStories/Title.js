import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ text, color }) {
  const style = {
    color,
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
};
Title.defaultProps = {
  text: 'TITLE',
  color: '',
};

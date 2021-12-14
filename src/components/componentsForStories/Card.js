import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

export default function Cards({
  titleLabel,
  cardText,
  cardImg,
  backgroundColor,
  color,
  size = 'md',
  borderRadius,
  border,
}) {
  let scale = 1;
  if (size === 'sm') scale = 30;
  if (size === 'md') scale = 40;
  if (size === 'lg') scale = 50;
  const style = {
    width: `${scale * 0.5}em`,
    backgroundColor,
    color,
    textAlign: 'center',
    borderRadius,
    border,
  };
  return (
    <div>
      <Card style={style}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{titleLabel}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Button variant="primary">Details</Button>
          <Button variant="info">Edit</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
Cards.propTypes = {
  titleLabel: PropTypes.string,
  cardText: PropTypes.string,
  cardImg: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};
Cards.defaultProps = {
  titleLabel: '',
  cardText: '',
  cardImg: '',
  backgroundColor: '',
  color: '',
  size: 'md',
  borderRadius: '',
  border: '',
};

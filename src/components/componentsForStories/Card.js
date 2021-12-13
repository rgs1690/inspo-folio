import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

export default function Cards({ titleLabel, cardText, cardImg }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{titleLabel}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
Cards.propTypes = {
  titleLabel: PropTypes.string,
  cardText: PropTypes.string,
  cardImg: PropTypes.string,
};
Cards.defaultProps = {
  titleLabel: '',
  cardText: '',
  cardImg: '',
};

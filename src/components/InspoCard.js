import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

export default function InspoCard({ inspo }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={inspo.artUrl} />
        <Card.Body>
          <Card.Title>{inspo.inspoTitle}</Card.Title>
          <Card.Text>
            {inspo.artMedium}
            {inspo.artSize}
          </Card.Text>
          <Button variant="primary">View Details</Button>
          <Button variant="info">Update</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
InspoCard.propTypes = {
  inspo: PropTypes.shape({
    artMedium: PropTypes.string,
    artSize: PropTypes.string,
    inspoTitle: PropTypes.string,
    artUrl: PropTypes.string,
    myWorkId: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    yearCompleted: PropTypes.string,
  }).isRequired,
};

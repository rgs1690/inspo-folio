import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

export default function MyWorkCard({ myWork }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={myWork.artUrl} />
        <Card.Body>
          <Card.Title>{myWork.artTitle}</Card.Title>
          <Card.Text>
            {myWork.artMedium}
            {myWork.artSize}
          </Card.Text>
          <Button variant="primary">View Details</Button>
          <Button variant="info">Update</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
MyWorkCard.propTypes = {
  myWork: PropTypes.shape({
    artMedium: PropTypes.string,
    artSize: PropTypes.string,
    artTitle: PropTypes.string,
    artUrl: PropTypes.string,
    dateAdded: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  //   setMyWorks: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { deleteMyWork } from '../api/data/myWorkData';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function MyWorkCard({ myWork, setMyWorks }) {
  const currentUID = getCurrentUsersUid();
  const handleClick = () => {
    deleteMyWork(myWork.firebaseKey, currentUID).then((newArray) => setMyWorks(newArray));
  };
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
          <Button type="button" onClick={() => handleClick()} variant="danger">
            Delete
          </Button>
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
  setMyWorks: PropTypes.func.isRequired,
};

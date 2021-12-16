import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { deleteMyWork } from '../api/data/myWorkData';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function MyWorkCard({ myWork, setMyWorks }) {
  const currentUID = getCurrentUsersUid();
  const handleClick = () => {
    deleteMyWork(myWork.firebaseKey, currentUID).then((newArray) => setMyWorks(newArray));
  };
  const style = {
    width: '18rem',
    backgroundColor: '#A9CEF4',
    textAlign: 'center',
    border: '1px, solid, #597081',
  };
  return (
    <div>
      <Card className="cardBody" style={style}>
        <Card.Img variant="top" src={myWork.artUrl} />
        <Card.Body className="cardBody">
          <Card.Title>{myWork.artTitle}</Card.Title>
          <Card.Text>
            {myWork.artMedium} <br />
            {myWork.artSize}
          </Card.Text>
          <Link
            to={`/myWorkDetails/${myWork.firebaseKey}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
          <Link to={`/editArt/${myWork.firebaseKey}`} className="btn btn-info">
            Update
          </Link>
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

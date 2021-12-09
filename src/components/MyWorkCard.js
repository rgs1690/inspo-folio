import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { deleteMyWork } from '../api/data/myWorkData';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function MyWorkCard({
  myWork,
  setMyWorks,
  border,
  backgroundColor = 'blue',
  size = 'md',
}) {
  let scale = 1;
  if (size === 'sm') scale = 5;
  if (size === 'md') scale = 10;
  if (size === 'lg') scale = 2.5;
  const style = {
    backgroundColor,
    width: `${scale * 2}rem`,
    border,
  };
  const currentUID = getCurrentUsersUid();
  const handleClick = () => {
    deleteMyWork(myWork.firebaseKey, currentUID).then((newArray) => setMyWorks(newArray));
  };
  return (
    <div>
      <Card style={style}>
        <Card.Img variant="top" src={myWork.artUrl} />
        <Card.Body>
          <Card.Title>{myWork.artTitle}</Card.Title>
          <Card.Text>
            {myWork.artMedium}
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
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
MyWorkCard.defaultProps = {
  border: '',
  backgroundColor: '',
  size: 'md',
};

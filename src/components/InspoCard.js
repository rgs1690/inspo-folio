import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import { deleteInspo } from '../api/data/inspoData';

export default function InspoCard({ inspo, setInspos }) {
  const currentUID = getCurrentUsersUid();
  const handleClick = () => {
    deleteInspo(inspo.firebaseKey, currentUID).then((newArray) => setInspos(newArray));
  };
  const cardStyle = {
    width: '18rem',
    backgroundColor: '#597081',
    textAlign: 'center',
    border: '1px, solid, #A9CEF4',
    color: '#A9CEF4',
    margin: '1em',
  };
  return (
    <div>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={inspo.artUrl} />
        <Card.Body>
          <Card.Title>{inspo.inspoTitle}</Card.Title>
          <Card.Title>{inspo.inspoArtist}</Card.Title>
          <Card.Text>
            {inspo.artMedium} <br />
            {inspo.artSize}
          </Card.Text>
          <Link
            to={`/inspoDetails/${inspo.firebaseKey}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
          <Link to={`/editInspo/${inspo.firebaseKey}`} className="btn btn-info">
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
    inspoArtist: PropTypes.string,
  }).isRequired,
  setInspos: PropTypes.func.isRequired,
};

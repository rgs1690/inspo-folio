import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getSingleInspo } from '../api/data/InspoData';
import { deleteMyWork, getSingleMyWork } from '../api/data/myWorkData';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function InspoDetailsView() {
  const [inspo, setInspo] = useState({});
  const [myWork, setMyWork] = useState({});
  const { firebaseKey } = useParams();
  const currentUid = getCurrentUsersUid();
  useEffect(() => {
    getSingleInspo(firebaseKey).then(setInspo);
    const myWorkKey = inspo.myWorkId;
    getSingleMyWork(myWorkKey).then(setMyWork);
  }, [myWork]);
  const handleClick = () => {
    deleteMyWork(myWork.firebaseKey, currentUid).then((newArray) => setMyWork(newArray));
  };
  return (
    <div>
      <div>
        <div>
          {myWork ? (
            <Card style={{ width: '18rem' }}>
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
                <Link
                  to={`/editArt/${myWork.firebaseKey}`}
                  className="btn btn-info"
                >
                  Update
                </Link>
                <Button
                  type="button"
                  onClick={() => handleClick()}
                  variant="danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ) : (
            ''
          )}
        </div>
      </div>

      <div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={inspo.artUrl} />
            <Card.Body>
              <Card.Title>{inspo.inspoTitle}</Card.Title>
              <Card.Title>{inspo.inspoArtist}</Card.Title>
              <Card.Text>
                {inspo.artMedium}
                {inspo.artSize}
              </Card.Text>
              <Link
                to={`/inspoDetails/${inspo.firebaseKey}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
              <Link
                to={`/editInspo/${inspo.firebaseKey}`}
                className="btn btn-info"
              >
                Update
              </Link>
              <Button
                type="button"
                onClick={() => handleClick()}
                variant="danger"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <p>{inspo.inspoDescription}</p>
      </div>
    </div>
  );
}

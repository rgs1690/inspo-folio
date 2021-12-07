import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getInspoByMyWorkId } from '../api/data/InspoData';
import { getSingleMyWork, deleteMyWork } from '../api/data/myWorkData';
import InspoCard from '../components/InspoCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function MyWorkDetailsView() {
  const [myWork, setMyWork] = useState({});
  const [inspos, setInspos] = useState([]);
  const { firebaseKey } = useParams();
  const currentUid = getCurrentUsersUid();
  const handleClick = () => {
    deleteMyWork(myWork.firebaseKey, currentUid).then((newArray) => setMyWork(newArray));
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleMyWork(firebaseKey).then(setMyWork);
      getInspoByMyWorkId(currentUid, firebaseKey).then(setInspos);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <div>
        <div>
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
        </div>

        {inspos.map((inspo) => (
          <InspoCard
            key={inspo.firebaseKey}
            inspo={inspo}
            setInspos={setInspos}
          />
        ))}
      </div>
    </>
  );
}

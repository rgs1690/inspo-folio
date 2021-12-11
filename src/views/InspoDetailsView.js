import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { getSingleInspo } from '../api/data/InspoData';
import { deleteMyWork, getSingleMyWork } from '../api/data/myWorkData';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

const DetailsStyle = styled.div`
  display: relative;
  text-align: center;
  .absoluteContainer {
    position: absolute;
    top: 5em;
    left: 66em;
  }
  .myWork {
    margin-top: 2em;
  }

  .card {
    width: 40em;
    margin-left: 2em;
  }
  .cardImage {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .inspoDescrip {
    margin: 1em;
    font-size: 5em;
  }
  h1 {
    margin-top: 10em;
  }
`;
export default function InspoDetailsView() {
  const [inspo, setInspo] = useState({});
  const [myWork, setMyWork] = useState({});
  const { firebaseKey } = useParams();
  const currentUid = getCurrentUsersUid();
  useEffect(() => {
    let isMounted = true;
    getSingleInspo(firebaseKey).then((inspoObj) => {
      if (isMounted) setInspo(inspoObj);
    });
    const myWorkKey = inspo.myWorkId;
    getSingleMyWork(myWorkKey).then((myWorkObj) => {
      if (isMounted) setMyWork(myWorkObj);
    });

    return () => {
      isMounted = false;
    };
  }, [inspo, myWork]);
  const handleClick = () => {
    deleteMyWork(myWork.firebaseKey, currentUid).then((newArray) => setMyWork(newArray));
  };
  return (
    <DetailsStyle>
      <div>
        <div className="cardContainer">
          <div>
            <div className="myWork">
              {myWork ? (
                <Card className="card">
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={myWork.artUrl}
                  />
                  <Card.Body>
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
            <div className="absoluteContainer">
              <Card className="card">
                <Card.Img
                  className="cardImage"
                  variant="top"
                  src={inspo.artUrl}
                />
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
            <h1>Why I was inspired: </h1>
          </div>
          <div>
            <p className="inspoDescrip">{inspo.inspoDescription}</p>
          </div>
        </div>
      </div>
    </DetailsStyle>
  );
}

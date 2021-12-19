import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { getSingleInspo } from '../api/data/inspoData';
import { deleteMyWork, getSingleMyWork } from '../api/data/myWorkData';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

const DetailsStyle = styled.div`
  text-align: center;

  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 100px;
    justfy-items: center;
    align-items: center;
    margin-top: 5em;
  }
  .grid-container-2 {
    align-items: center;
  }

  .grid-container-3 {
    grid-column: 1/4;
    marigin-top: 5em;
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
    font-size: 3em;
    color: #e5ecf0;
  }
  h1 {
    text-decoration: underline;
    color: #e5ecf0;
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
  const inspoStyle = {
    backgroundColor: '#597081',
    textAlign: 'center',
    border: '1px, solid, #A9CEF4',
    color: '#A9CEF4',
  };
  const myWorkStyle = {
    backgroundColor: '#A9CEF4',
    textAlign: 'center',
    border: '1px, solid, #597081',
  };
  return (
    <DetailsStyle>
      <div>
        <div className="grid-container">
          <div className="grid-container-1">
            <div className="myWork">
              {myWork ? (
                <Card style={myWorkStyle}>
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

          <div className="grid-container-2">
            <div className="inspoCard">
              <Card style={inspoStyle}>
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
          <div className="grid-container-3">
            <h1>Why I was inspired: </h1>
            <p className="inspoDescrip">{inspo.inspoDescription}</p>
          </div>
        </div>
      </div>
    </DetailsStyle>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { getInspoByMyWorkId } from '../api/data/inspoData';
import { getSingleMyWork, deleteMyWork } from '../api/data/myWorkData';
import InspoCard from '../components/InspoCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

const DetailsStyle = styled.div`
margin: 1em;
 .grid-container {
   display: grid;
   grid-template-columns: 2fr 1fr;
   margin-bottom: 5em;
 };

.flexContainer {
  display: inline-flex
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
};
.myWorkCard {
  text-align: center;
}
.inspoCard {
  margin: 1em;
}
h1{
  color: #E5ECF0;
  margin: 2em;
  text-decoration: underline;
}
`;
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
    getSingleMyWork(firebaseKey).then((myWorkArray) => {
      if (isMounted) setMyWork(myWorkArray);
    });
    getInspoByMyWorkId(currentUid, firebaseKey).then((inspoArray) => {
      if (isMounted) setInspos(inspoArray);
    });

    return () => {
      isMounted = false;
    };
  }, []);
  const myWorkStyle = {
    width: '40rem',
    backgroundColor: '#A9CEF4',
    textAlign: 'center',
    border: '1px, solid, #59708',
  };
  return (
    <>
      <DetailsStyle>
        <div className="grid-container">
          <div className="grid-item-1">
            <h1>Your Art</h1>
            <Card className="myWorkCard" style={myWorkStyle}>
              <Card.Img variant="top" src={myWork.artUrl} />
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
          </div>
          <div className="grid-item-2">
            <h1>Your Inspos</h1>
            <div className="flexContainer">
              {inspos.map((inspo) => (
                <InspoCard
                  key={inspo.firebaseKey}
                  inspo={inspo}
                  setInspos={setInspos}
                />
              ))}
            </div>
          </div>
        </div>
      </DetailsStyle>
    </>
  );
}

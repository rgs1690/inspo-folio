import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { getAllMyWorks } from '../api/data/myWorkData';
import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

const CardStyle = styled.div`
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 3em;
  }

  .formStyle {
    display: block;
    margin: 0 auto;
    width: 50em;
    margin-top: 1em;
  }
`;
const getSearchItems = (searchItem, myWorks) => {
  if (!searchItem) {
    return myWorks;
  }
  return myWorks.filter((myWork) => myWork.artTitle.toUpperCase().includes(searchItem.toUpperCase()));
};
export default function SearchMyWork() {
  const currentUid = getCurrentUsersUid();
  const [myWorks, setMyWorks] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const searchTerms = getSearchItems(searchItem, myWorks);

  useEffect(() => {
    let isMounted = true;
    getAllMyWorks(currentUid).then((myWorksArray) => {
      if (isMounted) setMyWorks(myWorksArray);
    });

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <CardStyle>
        <div className="formStyle">
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search By Title"
              className="me-2"
              aria-label="Search-by-title"
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="flexContainer">
          {searchTerms ? (
            <>
              {searchTerms.map((term) => (
                <MyWorkCard
                  key={term.firebaseKey}
                  myWork={term}
                  setMyWorks={setMyWorks}
                />
              ))}
            </>
          ) : (
            'No results'
          )}
        </div>
      </CardStyle>
    </>
  );
}

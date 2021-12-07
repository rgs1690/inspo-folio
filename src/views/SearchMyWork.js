import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { getAllMyWorks } from '../api/data/myWorkData';
import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

const getSearchItems = (searchItem, myWorks) => {
  if (!searchItem) {
    return myWorks;
  }
  return myWorks.filter((myWork) => myWork.artTitle.toLowerCase().includes(searchItem));
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
      <div>
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
      <div>
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
    </>
  );
}

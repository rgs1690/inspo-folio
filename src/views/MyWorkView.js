import React, { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getAllMyWorks } from '../api/data/myWorkData';
import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import { orderMyWorkByTitle } from '../helpers/sortHelpers';

export default function MyWorkView() {
  const currentUid = getCurrentUsersUid();
  const [myWorks, setMyWorks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    getAllMyWorks(currentUid).then((myWorkArray) => {
      if (isMounted) setMyWorks(myWorkArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  const handleClick = (method) => {
    if (method === 'add') {
      history.push('/newArt');
    } else if (method === 'sortTitle') {
      orderMyWorkByTitle(myWorks);
    }
  };
  return (
    <div>
      <Button
        type="button"
        variant="secondary"
        size="lg"
        onClick={() => handleClick('add')}
      >
        ADD YOUR ART
      </Button>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort Artworks
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            id="sortTitle"
            type="button"
            onClick={() => handleClick('sortTitle')}
          >
            Sort by Title
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id="sortOld">
            Sort by Oldest
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" id="sortNew">
            Sort by Newest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {myWorks ? (
        <>
          {myWorks.map((myWork) => (
            <MyWorkCard
              key={myWork.firebaseKey}
              myWork={myWork}
              setMyWorks={setMyWorks}
            />
          ))}
        </>
      ) : (
        'Add your Work'
      )}
    </div>
  );
}

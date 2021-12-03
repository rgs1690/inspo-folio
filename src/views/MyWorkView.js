import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getAllMyWorks } from '../api/data/myWorkData';
import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

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

import React, { useState, useEffect } from 'react';
import { getAllMyWorks } from '../api/data/myWorkData';
import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function MyWorkView() {
  const currentUid = getCurrentUsersUid();
  const [myWorks, setMyWorks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllMyWorks(currentUid).then((myWorkArray) => {
      if (isMounted) setMyWorks(myWorkArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
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

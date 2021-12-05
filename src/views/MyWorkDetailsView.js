import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInspoByMyWorkId } from '../api/data/InspoData';
import { getSingleMyWork } from '../api/data/myWorkData';
import InspoCard from '../components/InspoCard';
// import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function MyWorkDetailsView() {
  const [myWork, setMyWork] = useState({});
  const [inspos, setInspos] = useState([]);
  const { firebaseKey } = useParams();
  const currentUid = getCurrentUsersUid();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleMyWork(firebaseKey).then(setMyWork);
      console.warn(myWork);
      getInspoByMyWorkId(currentUid, firebaseKey).then(setInspos);
      console.warn(inspos);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      {inspos.map((inspo) => (
        <InspoCard
          key={inspo.firebaseKey}
          inspo={inspo}
          setInspos={setInspos}
        />
      ))}
    </>
  );
}

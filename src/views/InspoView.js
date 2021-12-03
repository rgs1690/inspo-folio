import React, { useState, useEffect } from 'react';
import { getAllInspos } from '../api/data/InspoData';
import InspoCard from '../components/InspoCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

export default function InspoView() {
  const currentUid = getCurrentUsersUid();
  const [inspos, setInspos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllInspos(currentUid).then((inspoArray) => {
      if (isMounted) setInspos(inspoArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      {inspos ? (
        <>
          {inspos.map((inspo) => (
            <InspoCard
              key={inspo.firebaseKey}
              inspo={inspo}
              setinspos={inspos}
            />
          ))}
        </>
      ) : (
        'Add your Inspos'
      )}
    </div>
  );
}

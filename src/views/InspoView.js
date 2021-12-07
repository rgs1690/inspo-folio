import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { getAllInspos } from '../api/data/InspoData';
import InspoCard from '../components/InspoCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import {
  orderInspoByNew,
  orderInspoByOld,
  orderInsposByTitle,
} from '../helpers/sortHelpers';

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
  const handleClick = (method) => {
    if (method === 'sortTitle') {
      orderInsposByTitle(inspos);
    } else if (method === 'sortOld') {
      orderInspoByOld(inspos);
    } else if (method === 'sortNew') {
      orderInspoByNew(inspos);
    }
  };
  return (
    <div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Sort Inspos
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              type="button"
              onClick={() => handleClick('sortTitle')}
            >
              Sort by Title
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              type="button"
              onClick={() => handleClick('sortOld')}
            >
              Sort by Oldest
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              type="button"
              onClick={() => handleClick('sortNew')}
            >
              Sort by Newest
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {inspos ? (
        <>
          {inspos.map((inspo) => (
            <InspoCard
              key={inspo.firebaseKey}
              inspo={inspo}
              setInspos={setInspos}
            />
          ))}
        </>
      ) : (
        'Add your art to add inspos'
      )}
    </div>
  );
}

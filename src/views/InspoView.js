import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { getAllInspos } from '../api/data/inspoData';
import InspoCard from '../components/InspoCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import {
  orderInspoByNew,
  orderInspoByOld,
  orderInsposByTitle,
} from '../helpers/sortHelpers';

const InspoStyle = styled.div`
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5em;
  }
  .dropStyle {
    display: block;
    margin: 0 auto;
    width: 10em;
    margin-top: 1em;
  }
`;
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
  const dropDownStyle = {
    backgroundColor: '#A9CEF4',
    color: 'black',
    width: '10em',
  };
  return (
    <InspoStyle>
      <div>
        <div className="dropStyle">
          <Dropdown>
            <Dropdown.Toggle style={dropDownStyle} id="dropdown-basic">
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
        <div className="flexContainer">
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
      </div>
    </InspoStyle>
  );
}

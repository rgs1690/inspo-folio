import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getAllMyWorks } from '../api/data/myWorkData';
import MyWorkCard from '../components/MyWorkCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import {
  orderMyWorkByTitle,
  orderMyWorkByOld,
  orderMyWorkByNew,
} from '../helpers/sortHelpers';

const CardStyle = styled.div`
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5em;
  }
  .ButtonDropFlex {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin-top: 1em;
  }
  Button {
    margin-right: 1em;
  }
`;

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
    } else if (method === 'sortOld') {
      orderMyWorkByOld(myWorks);
    } else if (method === 'sortNew') {
      orderMyWorkByNew(myWorks);
    }
  };
  const btnStyle = {
    backgroundColor: '#A9CEF4',
    color: 'black',
  };
  const dropDownStyle = {
    backgroundColor: '#A9CEF4',
    color: 'black',
    width: '10em',
  };
  return (
    <div>
      <CardStyle>
        <div className="ButtonDropFlex">
          <Button
            style={btnStyle}
            type="button"
            size="lg"
            onClick={() => handleClick('add')}
          >
            ADD YOUR ART
          </Button>
          <Dropdown>
            <Dropdown.Toggle style={dropDownStyle} id="dropdown-basic">
              Sort Artworks
            </Dropdown.Toggle>

            <Dropdown.Menu style={dropDownStyle}>
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
      </CardStyle>
    </div>
  );
}

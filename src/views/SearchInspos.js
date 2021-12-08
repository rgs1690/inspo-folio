import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { getAllInspos } from '../api/data/InspoData';
import InspoCard from '../components/InspoCard';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';

const getSearchItems = (searchItem, inspos) => {
  if (!searchItem) {
    return inspos;
  }
  return inspos.filter((inspo) => inspo.inspoTitle.toUpperCase().includes(searchItem.toUpperCase()));
};
export default function SearchInspos() {
  const currentUid = getCurrentUsersUid();
  const [inspos, setInspos] = useState();
  const [searchItem, setSearchItem] = useState('');
  const searchTerms = getSearchItems(searchItem, inspos);

  useEffect(() => {
    const isMounted = true;
    getAllInspos(currentUid).then((inspoArray) => {
      if (isMounted) setInspos(inspoArray);
    });
  });

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
              <InspoCard
                key={term.firebaseKey}
                inspo={term}
                setInspos={setInspos}
              />
            ))}
          </>
        ) : (
          'No Results'
        )}
      </div>
    </>
  );
}

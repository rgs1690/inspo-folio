import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <div>
      <div className="formStyle">
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search By Title"
            className="me-2"
            aria-label="Search-by-title"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
}

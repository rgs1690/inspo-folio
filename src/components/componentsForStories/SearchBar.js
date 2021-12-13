import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar({
  width, border, btnBackground, color,
}) {
  const style = {
    width,
    border,
  };
  const btnStyle = {
    border,
    backgroundColor: btnBackground,
    color,
  };
  return (
    <div>
      <div>
        <Form className="d-flex">
          <FormControl
            style={style}
            type="text"
            placeholder="Search By Title"
            className="me-2"
            aria-label="Search-by-title"
          />
          <Button style={btnStyle} variant="outline-success">
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  btnBackground: PropTypes.string,
  color: PropTypes.string,
};
SearchBar.defaultProps = {
  width: '',
  border: '',
  btnBackground: '',
  color: '',
};

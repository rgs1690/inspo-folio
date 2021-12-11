import React from 'react';
import { PropTypes } from 'prop-types';
import { Dropdown } from 'react-bootstrap';

export default function DropdownMenu({ func }) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort Artworks
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" type="button" onClick={func}>
            Sort by Title
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" type="button" onClick={func}>
            Sort by Oldest
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" type="button" onClick={func}>
            Sort by Newest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
DropdownMenu.propTypes = {
  func: PropTypes.func,
};
DropdownMenu.defaultProps = {
  func: () => console.warn('BUTTON CLICKED'),
};

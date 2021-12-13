import React from 'react';
import { PropTypes } from 'prop-types';
import { Dropdown } from 'react-bootstrap';

export default function DropdownMenu({ func, backgroundColor, color }) {
  const style = {
    backgroundColor,
    color,
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle style={style} variant="secondary" id="dropdown-basic">
          Sort Artworks
        </Dropdown.Toggle>

        <Dropdown.Menu style={style}>
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
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
DropdownMenu.defaultProps = {
  func: () => console.warn('BUTTON CLICKED'),
  backgroundColor: '',
  color: '',
};

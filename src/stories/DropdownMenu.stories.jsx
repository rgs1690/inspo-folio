import React from 'react';
import DropdownMenuComp from '../components/componentsForStories/DropdownMenu';

export default {
  title: 'Dropdowns',
  component: DropdownMenuComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Dropdown = (args) => <DropdownMenuComp {...args} />;

Dropdown.args = {
  backgroundColor: 'lightblue',
  color: 'blue',
  func: () => console.warn('BUTTON CLICKED'),
  itemColor: 'white',
};

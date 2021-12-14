import React from 'react';
import SearchBarComp from '../components/componentsForStories/SearchBar';

export default {
  title: 'Search Bars',
  component: SearchBarComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const SearchBar = (args) => <SearchBarComp {...args} />;

SearchBar.args = {
  width: '300px',
  border: 'solid 1px black',
  btnBackground: '',
  color: '',
};

import React from 'react';
import NavigationComp from '../components/componentsForStories/Navigation';

export default {
  title: 'Nav Bar',
  component: NavigationComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const NavBar = (args) => <NavigationComp {...args} />;

NavBar.args = {
  backgroundColor: 'lightblue',
  color: 'blue',
  width: '550px',
};

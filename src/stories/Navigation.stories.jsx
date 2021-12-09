import React from 'react';
import NavBarComp from '../components/NavBar';

export default {
  title: 'Nav Bar',
  component: NavBarComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const NavBar = (args) => <NavBarComp {...args} />;

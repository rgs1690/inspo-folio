import React from 'react';
import NavBar from '../../components/NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
};
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <NavBar {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  size: 'md',
};

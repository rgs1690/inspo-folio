import React from 'react';
import ButtonComp from '../components/componentsForStories/Button';

export default {
  title: 'Buttons',
  component: ButtonComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Button = (args) => <ButtonComp {...args} />;
// eslint-disable-next-line react/jsx-props-no-spreading
export const LogOut = (args) => <ButtonComp {...args} />;
Button.args = {
  label: 'LOG ME OUT',
  backgroundColor: 'blue',
};
LogOut.args = {
  label: 'LOGOUT',
  backgroundColor: 'red',
  color: 'white',
  border: 'black',
};

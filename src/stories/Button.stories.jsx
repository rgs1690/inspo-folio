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
  label: 'ADD YOUR ARTWORK',
  backgroundColor: 'blue',
  color: 'lightblue',
  border: 'lightblue',
  borderRadius: '20px',
};
LogOut.args = {
  label: 'LOGOUT',
  backgroundColor: 'red',
  color: 'white',
  border: 'black',
  borderRadius: '20px',
};

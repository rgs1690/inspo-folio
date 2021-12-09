import React from 'react';
import LogOutButtonComp from '../components/buttons/LogOutButton';

export default {
  title: 'Log Out Button',
  component: LogOutButtonComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const LogOutButton = (args) => <LogOutButtonComp {...args} />;

LogOutButton.args = {
  label: 'LOG ME OUT',
  backgroundColor: 'red',
};

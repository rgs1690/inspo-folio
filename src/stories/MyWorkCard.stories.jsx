import React from 'react';
// import firebase from 'firebase/app';
import MyWorkCardComp from '../components/MyWorkCard';

export default {
  title: 'My Work Card',
  component: MyWorkCardComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const MyWorkCard = (args) => <MyWorkCardComp {...args} />;

MyWorkCard.args = {
  backgroundColor: 'blue',
};

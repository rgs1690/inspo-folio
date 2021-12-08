import React from 'react';
import MyWorkCardComp from '../components/MyWorkCard';

export default {
  title: 'My Work Card',
  component: MyWorkCardComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const MyWorkCard = (args) => <MyWorkCardComp {...args} />;

MyWorkCard.args = {};

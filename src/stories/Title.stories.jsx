import React from 'react';
import TitleComp from '../components/componentsForStories/Title';

export default {
  title: 'Titles',
  component: TitleComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Title = (args) => <TitleComp {...args} />;

Title.args = {
  text: 'THIS IS THE TITLE!',
};

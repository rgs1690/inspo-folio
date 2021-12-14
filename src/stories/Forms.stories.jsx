import React from 'react';
import FormsComp from '../components/componentsForStories/Forms';

export default {
  title: 'Forms',
  component: FormsComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Form = (args) => <FormsComp {...args} />;

Form.args = {
  backgroundColor: 'lightblue',
  border: '',
  color: 'blue',
  width: '600px',
  margin: '5px',
};

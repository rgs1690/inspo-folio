import React from 'react';
import CardsComp from '../components/componentsForStories/Card';

export default {
  title: 'Cards',
  component: CardsComp,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Card = (args) => <CardsComp {...args} />;

Card.args = {
  titleLabel: 'THIS IS THE TITLE',
  cardText: 'CARD TEXT',
  cardImg: 'https://www.vangoghgallery.com/img/starry_night_full.jpg',
};

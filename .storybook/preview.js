import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import firebaseConfig from '../src/api/apiKeys';
import getCurrentUsersUid from '../src/helpers/getCurrentUserUID';

// this is where you can change the storybook display
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

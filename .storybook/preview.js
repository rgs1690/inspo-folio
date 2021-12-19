import 'bootstrap/dist/css/bootstrap.min.css';
import { themes } from '@storybook/theming';
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

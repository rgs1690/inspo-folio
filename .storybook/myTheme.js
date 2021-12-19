import { create } from '@storybook/theming';

export default create({
  base: 'light',
  backgroungColor: '#E5ECF0',
  colorPrimary: '#E5ECF0',
  colorSecondary: '#597081',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#36494E',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#A9CEF4',
  barSelectedColor: '#597081',
  barBg: '#36494E',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#A9CEF4',
  inputBorderRadius: 4,
  brandTitle: 'Grace Storybook',
  brandUrl: 'https://inspo-folio.netlify.app/inspos',
  brandImage:
    'https://dozitgaqgnfnfsxezhpg.supabase.in/storage/v1/object/public/capstone/NavLogo.png',
});

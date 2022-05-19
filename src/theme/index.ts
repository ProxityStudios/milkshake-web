import { BaseThemeWithExtensions, ChakraTheme, extendTheme, ThemeOverride } from '@chakra-ui/react';

import styles from './styles';

import config from './foundations/config';
import fonts from './foundations/fonts';
import colors from './foundations/colors';
import shadows from './foundations/shadows';
import breakpoints from './foundations/breakpoints';

import Button from './components/Button';
import Switch from './components/Switch';
import Tooltip from './components/Tooltip';

const customTheme: ThemeOverride = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  breakpoints,
  components: {
    Button,
    Switch,
    Tooltip
  },
  direction: 'ltr',
};

export default extendTheme(customTheme);

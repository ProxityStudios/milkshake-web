import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

import config from './foundations/config';
import fonts from './foundations/fonts';
import colors from './foundations/colors';
import shadows from './foundations/shadows';

import Button from './components/button';
import Switch from './components/switch';

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  components: {
    Button,
    Switch
  }
};

export default extendTheme(customTheme);

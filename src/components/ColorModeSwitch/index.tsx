import { useColorMode, Switch, SwitchProps } from '@chakra-ui/react';
import { FC } from 'react';

type ColorModeSwitchProps = SwitchProps & {};

const ColorModeSwitch: FC<ColorModeSwitchProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Switch
      aria-label="Toggle color mode"
      isChecked={isDark}
      onChange={toggleColorMode}
      {...props}
    />
  );
};

export default ColorModeSwitch;

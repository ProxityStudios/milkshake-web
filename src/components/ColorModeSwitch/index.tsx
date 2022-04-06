import { useColorMode, Switch } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Switch
      aria-label="Toggle color mode"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;

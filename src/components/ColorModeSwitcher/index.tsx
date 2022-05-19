import { useColorMode, Switch, SwitchProps } from '@chakra-ui/react';

type ColorModeSwitcherProps = SwitchProps & {};

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
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

export default ColorModeSwitcher;

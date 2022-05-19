import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

import IconButtonComponent from '../IconButton';

type ColorModeSwitcherButtonProps = {};

const ColorModeSwitcherButton: React.FC<ColorModeSwitcherButtonProps> = (props) => {
     const { toggleColorMode } = useColorMode();
     const icon = useColorModeValue(<MoonIcon fontSize="xl" />, <SunIcon fontSize="xl" />);

     return (
          <IconButtonComponent
               tooltipLabel="Change Color Mode"
               aria-label="Change Color Mode"
               onClick={toggleColorMode}
               icon={icon}
               {...props}
          />
     );
};

export default ColorModeSwitcherButton;

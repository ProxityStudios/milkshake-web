import { Flex, useColorModeValue } from '@chakra-ui/react';
import ColorModeSwitch from 'components/ColorModeSwitch';

const Navbar = () => {
  const navbarBg = useColorModeValue('secondary.400', 'secondary.600');

  return (
    <Flex bg={navbarBg} h="12" alignItems="center" px="6" overflow="hidden">
      Dark Mode: <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;

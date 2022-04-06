import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';
import ColorModeSwitch from 'components/ColorModeSwitch';

const Navbar = () => {
  const navbarBg = useColorModeValue('secondary.400', 'secondary.600');

  return (
    <Box bg={navbarBg} h="12" px="6" overflow="hidden">
      <Container
        as={Flex}
        maxW="container.lg"
        h="full"
        alignItems="center"
      >
        Dark Mode: <ColorModeSwitch />
      </Container>
    </Box>
  );
};

export default Navbar;

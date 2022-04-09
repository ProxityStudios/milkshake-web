import { Box, useColorModeValue } from '@chakra-ui/react';
import BaseContainer from 'components/BaseContainer';
import ColorModeSwitch from 'components/ColorModeSwitch';

const Navbar = () => {
  const colors = {
    bg: useColorModeValue('secondary.50', 'secondary.500'),
    color: useColorModeValue('white', 'primary.500')
  };

  return (
    <BaseContainer color={colors.color} boxProps={{ py: '4', bg: colors.bg }}>
      <Box>
        Dark Mode
        <ColorModeSwitch ml="1" />
      </Box>
    </BaseContainer>
  );
};

export default Navbar;

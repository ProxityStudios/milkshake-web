import { Center, Heading, useColorMode } from '@chakra-ui/react';

import Hero from 'components/Hero';
import Container from 'components/Container';
import ColorModeSwitch from 'components/ColorModeSwitch';

const Index = () => {
  const { colorMode } = useColorMode();

  const color = { light: 'black', dark: 'whiteAlpha.400' };

  return (
    <Container height="100vh">
      <ColorModeSwitch />
      <Hero title="Milkshake Website" />

      <Heading
        as="h3"
        size="md"
        fontWeight="bold"
        position="fixed"
        bottom="8"
        color={color[colorMode]}
        textTransform="uppercase"
      >
        <Center>Under Consturction</Center>
      </Heading>
    </Container>
  );
};

export default Index;

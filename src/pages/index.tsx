import { Center, Heading, Container } from '@chakra-ui/react';
import { NextPage } from 'next';

import Hero from 'components/Hero';

const Index: NextPage = () => {
  return (
    <Container maxW="container.lg">
      <Hero title="Milkshake Website" />

      <Heading as="h3" size="md" textAlign="center" fontWeight="bold">
        <Center>Under Consturction</Center>
      </Heading>
    </Container>
  );
};

export default Index;

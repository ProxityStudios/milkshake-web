import { Flex, Heading, Img } from '@chakra-ui/react';
import { FC } from 'react';

export type HeroProps = {
  title?: string;
};

const Hero: FC<HeroProps> = ({ title = 'Milkshake' }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Img src="/img/chakra-logo.png" alt="Chakra-ui Logo" mr={4} />
    <Heading size="2xl">{title}</Heading>
  </Flex>
);

export default Hero;

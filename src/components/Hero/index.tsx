import { Flex, Heading, Img } from '@chakra-ui/react';
import { FC } from 'react';

export type HeroProps = {
  title?: string;
};

const Hero: FC<HeroProps> = ({ title = 'Milkshake' }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Img src="/img/chakra-logo.png" alt="Chakra-ui Logo" mr={4} />
      <Heading size="2xl">{title}</Heading>
    </Flex>
  );
};
export default Hero;

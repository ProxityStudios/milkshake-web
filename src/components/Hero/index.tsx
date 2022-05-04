import { Flex, FlexProps, Heading, Img } from '@chakra-ui/react';
import { FC } from 'react';

export type HeroProps = FlexProps & {
  title?: string;
};

const Hero: FC<HeroProps> = ({ title = 'Milkshake', ...props }) => {
  return (
    <Flex justifyContent="center" alignItems="center" p="10" {...props}>
      <Img
        borderRadius="full"
        h="12"
        src="/img/milkshake-logo.png"
        alt="Milkshake Logo"
        mr={4}
      />
      <Heading size="2xl">{title}</Heading>
    </Flex>
  );
};
export default Hero;

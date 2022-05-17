import { Container, ContainerProps, Flex, Heading, HStack, Image, LinkBox, StackDivider, Link, useColorModeValue } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import MilkshakeLogo from "src/assets/images/milkshake-logo.png";
import ColorModeSwitcherButton from '../ColorModeSwitcherButton';

type NavigationBarProps = ContainerProps & {
};

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  const backdropBrightness = useColorModeValue(1.1, 1);

  return (
    <Container zIndex={1} as={Flex} alignItems="center" justifyContent="space-between" borderBottomRadius="2xl" backdropFilter="auto" backdropBrightness={backdropBrightness} backdropBlur="lg" maxW="container.xl" py="6" {...props}>
      <HStack spacing="6" divider={<StackDivider />} alignItems="center">

        {/* left logo */}
        <Link as={NextLink} href="/">
          <LinkBox cursor="pointer" as={Flex} alignItems="center">
            <Image borderRadius="full" boxSize="55px" src={MilkshakeLogo.src} alt="Milkshake Logo" />
            <Heading as="h3" size="md" letterSpacing="wider" ml="3">Milkshake</Heading>
          </LinkBox>
        </Link>

        {/* left side */}
        <HStack spacing="7" justifyContent="flex-start">
          {/* report a bug for NextLink on ChakraUI integration */}
          <Link as={NextLink} href="/about-us" passHref>
            <LinkBox cursor="pointer">
              About Us
              <LinkIcon ml="1" fontSize="lg" />
            </LinkBox>
          </Link>
          <Link as={NextLink} href="/premium" passHref>
            <LinkBox cursor="pointer">
              Premium
              <LinkIcon ml="1" fontSize="lg" />
            </LinkBox>
          </Link>
          <Link as={NextLink} href="/commands" passHref>
            <LinkBox cursor="pointer">
              Commands
              <LinkIcon ml="1" fontSize="lg" />
            </LinkBox>
          </Link>
          <Link as={NextLink} href="/why-us" passHref>
            <LinkBox cursor="pointer">
              Why Us?
              <LinkIcon ml="1" fontSize="lg" />
            </LinkBox>
          </Link>
        </HStack>
      </HStack>

      {/* right side */}
      <Flex alignItems="center" justifyContent="flex-end" >
        <ColorModeSwitcherButton />
      </Flex>

    </Container>
  );
};

export default NavigationBar;

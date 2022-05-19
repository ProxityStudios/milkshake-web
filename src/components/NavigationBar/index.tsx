import {
	Container,
	ContainerProps,
	Button,
	Flex,
	Heading,
	HStack,
	LinkBox,
	StackDivider,
	Link,
	useColorModeValue,
	chakra,
	Box,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Image from 'next/image';

import MilkshakeLogo from '../../assets/images/milkshake-logo.png';
import ColorModeSwitcherButton from '../ColorModeSwitcherButton';

const ChakraImage = chakra(Image);
type NavigationBarProps = ContainerProps & {};

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
	const backdropBrightness = useColorModeValue(1.1, 1);

	return (
		<Container
			zIndex={1}
			overflow="hidden"
			as={Flex}
			alignItems="center"
			justifyContent="space-between"
			borderBottomRadius="2xl"
			backdropFilter="auto"
			backdropBrightness={backdropBrightness}
			backdropBlur="xl"
			maxW="container.xl"
			py="5"
			{...props}
		>
			<HStack spacing="6" divider={<StackDivider />} alignItems="center">
				{/* left logo */}
				<Link as={NextLink} href="/" passHref>
					<LinkBox cursor="pointer" as={Flex} alignItems="center">
						<Box boxSize="16">
							<ChakraImage
								loading="lazy"
								placeholder="blur"
								borderRadius="full"
								src={MilkshakeLogo}
								alt="Milkshake Logo"
							/>
						</Box>
						<Heading as="h3" size="md" letterSpacing="wider" ml="3">
							Milkshake
						</Heading>
					</LinkBox>
				</Link>

				{/* left side */}
				<HStack spacing="7" justifyContent="flex-start">
					{/* report a bug for NextLink on ChakraUI integration */}
					{/* <NextLink href="/about-us" passHref>
            <Button rightIcon={<LinkIcon ml="-1" fontSize="lg" />} variant={"link"}>
              About Us
            </Button>
          </NextLink> */}
					<NextLink href="/commands?all=yes" passHref>
						<Button rightIcon={<LinkIcon ml="-1" fontSize="lg" />} variant={'link'}>
							Commands
						</Button>
					</NextLink>
					<NextLink href="/premium" passHref>
						<Button rightIcon={<LinkIcon ml="-1" fontSize="lg" />} variant={'link'}>
							Premium
						</Button>
					</NextLink>
					<NextLink href="/why-us" passHref>
						<Button rightIcon={<LinkIcon ml="-1" fontSize="lg" />} variant={'link'}>
							Why Us?
						</Button>
					</NextLink>
					<NextLink href="/change-log" passHref>
						<Button rightIcon={<LinkIcon ml="-1" fontSize="lg" />} variant={'link'}>
							Change Log
						</Button>
					</NextLink>
				</HStack>
			</HStack>

			{/* right side */}
			<Flex alignItems="center" justifyContent="flex-end">
				<ColorModeSwitcherButton />
			</Flex>
		</Container>
	);
};

export default NavigationBar;

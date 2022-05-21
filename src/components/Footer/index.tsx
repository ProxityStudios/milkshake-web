import { LinkIcon } from '@chakra-ui/icons';
import { Button, Container, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const FooterComponent = () => {
	return (
		<Container maxW="container.xl">
			<Flex justifyContent="space-between" alignItems="center" py="14">
				<Text color="black.muted">Copyright &copy; {new Date().getFullYear()} Proxity Studios Inc. All rights reserved.</Text>
				<NextLink href="/about-us#hero-section" passHref>
					<Button rightIcon={<LinkIcon ml="-1" fontSize="lg" />} variant={'link'}>
						About Us
					</Button>
				</NextLink>
			</Flex>
		</Container>
	);
};

export default FooterComponent;

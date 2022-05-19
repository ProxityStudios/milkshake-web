import { Box, Center, Flex, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const PremiumPage: NextPage = () => {
	return (
		<DynamicPageComponent>
			<Head>
				<title>Change Log | Milkshake</title>
				<meta name="description" content="Change Log" />
			</Head>

			<Center as={Flex} flexDirection="column">
				<Box mt="10">
					<Heading size="md">Latest Changes</Heading>
					<List mt="4">
						<ListItem>
							<ListIcon /> improved performance
						</ListItem>
						<ListItem>
							<ListIcon /> updated layout
						</ListItem>
						<ListItem>
							<ListIcon /> updated UI
						</ListItem>
						<ListItem>
							<ListIcon /> some bugs fixed
						</ListItem>
					</List>
				</Box>
				<Box mt="10">
					<Heading size="md">2.0.2 Changes (Major Update)</Heading>
					<List mt="4">
						<ListItem>
							<ListIcon /> added new pages
						</ListItem>
						<ListItem>
							<ListIcon /> fixed component styles
						</ListItem>
						<ListItem>
							<ListIcon /> removed unnecessary packages
						</ListItem>
						<ListItem>
							<ListIcon /> improved performance
						</ListItem>
						<ListItem>
							<ListIcon /> added company bar
						</ListItem>
						<ListItem>
							<ListIcon /> updated main navbar
						</ListItem>
						<ListItem>
							<ListIcon /> added footer
						</ListItem>
					</List>
				</Box>
			</Center>
		</DynamicPageComponent>
	);
};

export default PremiumPage;

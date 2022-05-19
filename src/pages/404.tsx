import { Center } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const NotFoundPage: NextPage = () => {
	return (
		<DynamicPageComponent>
			<Head>
				<title>Hmm... Seems Like You Lose Your Way | Milkshake</title>
			</Head>

			<Center>Hmm... You lose your way?</Center>
		</DynamicPageComponent>
	);
};

export default NotFoundPage;

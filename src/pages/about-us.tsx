import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicHeroComponent, DynamicPageComponent } from '../components';
import MilkshakeLogo from '../assets/images/milkshake-logo.png';

const AboutUsPage: NextPage = () => {
	return (
		<DynamicPageComponent
			hero={
				<DynamicHeroComponent
					heading="About us"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi impedit."
					image={MilkshakeLogo}
				/>
			}
		>
			<Head>
				<title>About Us | Milkshake</title>
				<meta name="description" content="About Us" />
			</Head>
			<Heading h={1000} size="xl" color="rose.base">
				About Us
			</Heading>
		</DynamicPageComponent>
	);
};

export default AboutUsPage;

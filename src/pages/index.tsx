import { Button, Heading, Link } from '@chakra-ui/react';
import { NextPage } from 'next';
import { DynamicHeroComponent, DynamicPageComponent } from '../components';
import { StarIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import MilkshakeLogo from '../assets/images/milkshake-logo.png';
import LoaderComponent from '../components/Loader';

const Index: NextPage = () => {
	return (
		<DynamicPageComponent
			hero={
				<DynamicHeroComponent
					heading="Fast. Secure. Easier. Forever!"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi impedit."
					image={MilkshakeLogo}
					leftAdditions={
						<>
							<Button size="lg" leftIcon={<StarIcon fontSize="xl" />}>
								Get Started
							</Button>

							<Link href="/" ml="6">
								Learn More
								<ArrowForwardIcon fontSize="xl" />
							</Link>
						</>
					}
				/>
			}
		>
			<Heading h={1000} size="lg">
				Something
				<LoaderComponent size="lg" />
			</Heading>
		</DynamicPageComponent>
	);
};

export default Index;

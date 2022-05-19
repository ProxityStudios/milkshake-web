import {
	chakra,
	Box,
	Center,
	Container,
	FlexProps,
	Grid,
	GridItem,
	Heading,
	Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

const ChakraImage = chakra(Image);

export type HeroComponentProps = FlexProps & {
	heading: string;
	text?: string;
	additions?: ReactNode;
	leftAdditions?: ReactNode;
	image?: any;
};

const HeroComponent: React.FC<HeroComponentProps> = ({
	heading,
	text,
	additions,
	leftAdditions,
	image,
	...props
}) => {
	return (
		<Center as="section" id="hero-section" minH="md" py="32">
			<Container
				as={Grid}
				gridGap="10"
				gridTemplateColumns={`repeat(2, 1fr)`}
				maxW="container.lg"
				{...props}
			>
				<GridItem as={Center} flexDirection="column" alignItems="flex-start">
					<Box>
						<Heading size="3xl">{heading}</Heading>
						{text && (
							<Text fontSize="2xl" color="black.muted" mt="4">
								{text}
							</Text>
						)}
					</Box>
					{leftAdditions && <Box mt="20">{leftAdditions}</Box>}
				</GridItem>
				<GridItem>
					<ChakraImage
						loading="lazy"
						placeholder="blur"
						src={image}
						borderRadius="lg"
						alt="Hero Image"
					/>
				</GridItem>
				{additions && additions}
			</Container>
		</Center>
	);
};
export default HeroComponent;

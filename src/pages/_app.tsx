import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider, SlideFade } from '@chakra-ui/react';

import theme from '../theme';
import { DynamicFooterComponent, DynamicHeaderComponent } from 'src/components';
import { CompanyProvider } from 'src/contexts/CompanyContext';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<CompanyProvider>
			<ChakraProvider resetCSS theme={theme}>
				<Head>
					<title>Milkshake</title>
					<meta name="description" content="Milkshake" />
				</Head>

				{/* header */}
				<DynamicHeaderComponent />

				{/* content */}
				<SlideFade key={router.route} in offsetY={25}>
					<Component {...pageProps} />
				</SlideFade>

				{/* footer */}
				<DynamicFooterComponent />
			</ChakraProvider>
		</CompanyProvider>
	);
}

export default MyApp;

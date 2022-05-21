import Head from 'next/head';
import { AppProps } from 'next/app';
import { Center, ChakraProvider, SlideFade } from '@chakra-ui/react';

import theme from '../theme';
import { DynamicFooterComponent, DynamicHeaderComponent, DynamicPageShortcutsComponent } from '../components';
import { CompanyProvider } from '../contexts/CompanyContext';
import { useEffect, useState } from 'react';
import LoaderComponent from '../components/Loader';

function MyApp({ Component, pageProps, router }: AppProps) {
	const [routeLoading, setRouteLoading] = useState<boolean>(false);

	useEffect(() => {
		router.events.on('routeChangeStart', () => setRouteLoading(true));
		router.events.on('routeChangeComplete', () => setRouteLoading(false));
		router.events.on('routeChangeError', () => setRouteLoading(false));
	}, []);

	return (
		<CompanyProvider>
			<ChakraProvider resetCSS theme={theme}>
				<Head>
					<title>Milkshake</title>
					<meta name="description" content="Milkshake" />
				</Head>

				{/* page shortcuts */}
				<Center mr="4" pos="fixed" top="75%" bottom="25%" right="0" translateY="-50%">
					<DynamicPageShortcutsComponent />
				</Center>

				{/* header */}
				<DynamicHeaderComponent />

				{/* content */}
				{routeLoading ? <Center py="20"><LoaderComponent size="lg" /></Center> : <SlideFade key={router.route} in offsetY={25}>
					<Component {...pageProps} />
				</SlideFade>}

				{/* footer */}
				<DynamicFooterComponent />
			</ChakraProvider>
		</CompanyProvider>
	);
}

export default MyApp;

import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import config from '../theme/foundations/config';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="shortcut icon" href="/milkshake-logo.png" />
					<link rel="apple-touch-icon" href="/milkshake-logo.png" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

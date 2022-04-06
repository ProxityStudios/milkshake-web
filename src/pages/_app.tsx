import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';
import CompanyNavbar from 'components/CompanyNavbar';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Milkshake Web</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Milkshake Web" />
      </Head>

      <CompanyNavbar />
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

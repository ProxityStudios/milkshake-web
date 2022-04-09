import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';
import CompanyBar from 'components/CompanyBar';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Milkshake Web</title>

        <meta name="description" content="Milkshake Web" />
      </Head>

      <CompanyBar />
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const PremiumPage: NextPage = () => {
  return (
    <DynamicPageComponent>
      <Head>
        <title>Premium | Milkshake</title>
        <meta name="description" content="Premium" />
      </Head>

      <Heading size="xl" color="rose.base">Premium</Heading>
    </DynamicPageComponent>
  );
};

export default PremiumPage;

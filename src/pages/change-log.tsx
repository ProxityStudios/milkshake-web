import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const PremiumPage: NextPage = () => {
  return (
    <DynamicPageComponent>
      <Head>
        <title>Change Log | Milkshake</title>
        <meta name="description" content="Change Log" />
      </Head>

      <Heading size="xl" color="rose.base">Change Log</Heading>
    </DynamicPageComponent>
  );
};

export default PremiumPage;

import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const WhyUsPage: NextPage = () => {
  return (
    <DynamicPageComponent>
      <Head>
        <title>Why Us? | Milkshake</title>
        <meta name="description" content="Why Us?" />
      </Head>

      <Heading size="xl" color="rose.base">Why Us?</Heading>
    </DynamicPageComponent>
  );
};

export default WhyUsPage;

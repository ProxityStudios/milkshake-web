import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const AboutUsPage: NextPage = () => {
  return (
    <DynamicPageComponent>
      <Head>
        <title>About Us | Milkshake</title>
        <meta name="description" content="About Us" />
      </Head>
      <Heading size="xl" color="rose.base">About Us</Heading>
    </DynamicPageComponent>
  );
};

export default AboutUsPage;

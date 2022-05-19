import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { DynamicPageComponent } from '../components';

const PremiumPage: NextPage = () => {
     return (
          <DynamicPageComponent>
               <Head>
                    <title>Commands | Milkshake</title>
                    <meta name="description" content="Commands" />
               </Head>

               <Heading size="xl" color="rose.base">
                    Commands
               </Heading>
          </DynamicPageComponent>
     );
};

export default PremiumPage;

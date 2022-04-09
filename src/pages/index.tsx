import { NextPage } from 'next';

import Hero from 'components/Hero';
import BaseContainer from 'components/BaseContainer';

const Index: NextPage = () => {
  return (
    <>
      <BaseContainer>
        <Hero title="Milkshake Bot" />
      </BaseContainer>
    </>
  );
};

export default Index;

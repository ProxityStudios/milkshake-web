import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type CompanyBarProps = {};

const CompanyBar: FC<CompanyBarProps> = () => {
  return (
    <Box px="6" py="4" bg="black" color="white">
      <Heading as="h3" size="md">
        Proxity Studios
      </Heading>
    </Box>
  );
};

export default CompanyBar;

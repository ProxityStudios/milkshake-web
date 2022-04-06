import { Text, Flex, HStack, useColorModeValue } from '@chakra-ui/react';

const CompanyNavbar = () => {
  const bg = useColorModeValue('secondary.400', 'secondary.600');

  return (
    <Flex alignItems="center" h="14" bg={bg} color="white">
      <HStack w="full" borderBottomRadius="2xl" h="full" bg="gray.900" px="7">
        <Text fontSize="lg">Company Navbar</Text>
      </HStack>
    </Flex>
  );
};
export default CompanyNavbar;

import { Center, Text } from "@chakra-ui/react";

const FooterComponent = () => {
  return (
    <Center py="6">
      <Text color="black.muted">&copy; {new Date().getFullYear()} Proxity Studios—All Rights Reserved</Text>
    </Center>
  );
};

export default FooterComponent;

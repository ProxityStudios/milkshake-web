import { Box, Button, Divider, Heading, Input, Switch, Text, Wrap } from '@chakra-ui/react';
import { NextPage } from 'next';

import { DynamicPageComponent } from '../components';

const Index: NextPage = () => {
  return (
    <DynamicPageComponent>
      <Heading size="xl" color="rose.base">JUST A TEXT -
        INCREASE CONTRASTS OF COLOURS
      </Heading>
      <Text color="red.base">ERROR COLOR</Text>
      <Text color="green.base">SUCCESS COLOR</Text>
      <Text color="yellow.base">WARN COLOR</Text>
      <Text color="rose.base">BASE COLOR</Text>

      <Divider my="6" />

      <Input variant="filled" placeholder="Change border color of inputs..." />

      <Switch />
      <Switch isChecked />
      <Switch isDisabled />

      <Divider my="6" />

      <Button variant="ghost">Ghost Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="solid">Solid Button</Button>

      <Divider my="6" />

      TEST NAVBAR BACKDROP BLUR ON SCROLLING
      <Wrap mx="6">
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box><Box bg="red.base" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="yellow.base" boxSize="66"></Box>
        <Box bg="white" boxSize="66"></Box>
        <Box bg="red.base" boxSize="66"></Box>
        <Box bg="pink" boxSize="66"></Box>
        <Box bg="green.base" boxSize="66"></Box>
        <Box bg="blue" boxSize="66"></Box>
        <Box bg="gray" boxSize="66"></Box>
        <Box bg="rose.base" boxSize="66"></Box>
      </Wrap>
    </DynamicPageComponent>
  );
};

export default Index;

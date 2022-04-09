import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseContainerProps = ContainerProps & {
  boxProps?: BoxProps;
};

const BaseContainer: FC<BaseContainerProps> = ({ boxProps, ...props }) => {
  return (
    <Box {...boxProps}>
      <Container maxW="container.xl" {...props} />
    </Box>
  );
};

export default BaseContainer;

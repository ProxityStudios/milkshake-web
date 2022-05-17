import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react';

type PageComponentProps = ContainerProps & {
  boxprops?: BoxProps;
};

const PageComponent: React.FC<PageComponentProps> = ({ boxprops, ...props }) => {
  return (
    <Box {...boxprops}>
      <Container maxW="container.lg" {...props} />
    </Box>
  );
};

export default PageComponent;

import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PageComponentProps = ContainerProps & {
  boxprops?: BoxProps;
  hero?: ReactNode;
};

const PageComponent: React.FC<PageComponentProps> = ({ boxprops, hero, ...props }) => {
  return (
    <Box {...boxprops}>
      {hero && hero}
      <Container maxW="container.lg" {...props} />
    </Box>
  );
};

export default PageComponent;

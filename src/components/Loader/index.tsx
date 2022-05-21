import { Box, BoxProps } from '@chakra-ui/react';
import { RotatingLines } from 'react-loader-spinner';

type LoaderComponentProps = BoxProps & {
  size?: keyof typeof LoaderSize;
};

enum LoaderSize {
  lg = "75",
  md = "55",
  sm = "35",
  xs = "25",
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({ size = "md", ...props }) => {
  return (
    <Box {...props}>
      <RotatingLines width={LoaderSize[size]} />
    </Box>
  );
};

export default LoaderComponent;

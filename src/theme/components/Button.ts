import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
     baseStyle: {
          fontWeight: 'bold',
     },
     variants: {
          link: {
               borderRadius: 'none',
               py: '1',
               _dark: {
                    color: 'white',
               },
               color: 'black.base',
          },
     },
};

export default Button;

const styles = {
     global: (props: { colorMode: string }) => ({
          body: {
               bg: props.colorMode === 'dark' ? 'black.base' : 'white',
               color: props.colorMode === 'dark' ? 'white' : 'black.base',
          },
     }),
};

export default styles;

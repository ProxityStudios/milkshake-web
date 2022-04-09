const styles = {
  global: (props: { colorMode: string }) => ({
    'html, body': {
      bg: props.colorMode === 'dark' ? 'secondary.500' : 'white',
      color: props.colorMode === 'dark' ? 'primary.500' : 'black'
    }
  })
};

export default styles;

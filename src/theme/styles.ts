const styles = {
  global: (props: { colorMode: string }) => ({
    'html, body': {
      bg: props.colorMode === 'dark' ? 'secondary.900' : 'white',
      color: props.colorMode === 'dark' ? 'primary.600' : 'black'
    }
  })
};

export default styles;

const Tooltip = {
     baseStyle: {
          borderRadius: "md",
          px: "4"
     },
     variants: {
          primary: {
               bg: "tooltip.base",
               color: "tooltip.text.base"
          }
     },
     defaultProps: {
          variant: "primary"
     }
};

export default Tooltip;
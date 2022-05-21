import { DeepPartial } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';

const styles: DeepPartial<Styles> = {
	global: (props: { colorMode: string }) => ({
		body: {
			bg: props.colorMode === 'dark' ? 'black.base' : 'white',
			color: props.colorMode === 'dark' ? 'white' : 'black.base'
		}
	})
};

export default styles;

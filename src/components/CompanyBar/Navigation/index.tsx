import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, StackProps, Link } from '@chakra-ui/react';
import { ChakraComponent } from '@chakra-ui/system';
import Constants from 'src/constants';

type CompanyBarNavigationComponentProps = ChakraComponent<'div', StackProps> & {};

const CompanyBarNavigationComponent: CompanyBarNavigationComponentProps = (props) => {
	return (
		<HStack justifyContent="flex-end" spacing="5" {...props}>
			<Link letterSpacing="wide" href={Constants.Company.BaseURI} isExternal>
				Home <ExternalLinkIcon />
			</Link>
			<Link letterSpacing="wide" href={Constants.Company.BaseURI + '/products'} isExternal>
				Products <ExternalLinkIcon />
			</Link>
			<Link
				letterSpacing="wide"
				href={Constants.Company.BaseURI + '/terms-of-service'}
				isExternal
			>
				Terms <ExternalLinkIcon />
			</Link>
		</HStack>
	);
};

export default CompanyBarNavigationComponent;

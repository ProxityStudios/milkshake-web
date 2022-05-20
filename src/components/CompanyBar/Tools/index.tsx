import { HStack, StackProps, useToast, Icon } from '@chakra-ui/react';
import { CgViewSplit } from "react-icons/cg";

import IconButtonComponent from '../../../components/IconButton';
import { useCompanyUpdateContext } from '../../../contexts/CompanyContext';

type CompanyBarToolsComponentProps = StackProps & {};

const CompanyBarToolsComponent: React.FC<CompanyBarToolsComponentProps> = (props) => {
	const companyUpdateContext = useCompanyUpdateContext();
	const toast = useToast({ position: 'bottom-left', isClosable: true });

	return (
		<HStack justifyContent="flex-start" spacing="3" {...props}>
			<IconButtonComponent
				onClick={() => {
					companyUpdateContext.toggleBarSize();
					toast({
						status: 'success',
						title: 'Size of Company Bar has Changed!',
						description: 'Successfully changed size of company bar.',
					});
				}}
				tooltipLabel={'Company Bar Size'}
				aria-label={'Company Bar Size'}
				icon={<Icon as={CgViewSplit} />}
			/>
		</HStack>
	);
};

export default CompanyBarToolsComponent;

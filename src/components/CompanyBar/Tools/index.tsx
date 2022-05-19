import { HStack, StackProps, useToast } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

import IconButtonComponent from 'src/components/IconButton';
import { useCompanyUpdateContext } from 'src/contexts/CompanyContext';

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
						description: 'COMPANY_BAR_TOOLS_BAR_SIZE',
					});
				}}
				tooltipLabel={'Company Bar Size'}
				aria-label={'Company Bar Size'}
				icon={<ViewIcon fontSize="xl" />}
			/>
		</HStack>
	);
};

export default CompanyBarToolsComponent;

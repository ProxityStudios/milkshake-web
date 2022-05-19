import { DynamicCompanyBarComponent, DynamicNavigationBarComponent } from '..';
import { Alert, AlertTitle, AlertIcon, AlertDescription } from '@chakra-ui/react';

const HeaderComponent = () => {
	return (
		<>
			<Alert justifyContent="center">
				<AlertIcon />
				<AlertTitle>Light Mode is Released!</AlertTitle>
				<AlertDescription>
					If you found a bug, please report it to our support center!
				</AlertDescription>
			</Alert>

			{/* company bar */}
			<DynamicCompanyBarComponent />

			{/* navigation bar */}
			<DynamicNavigationBarComponent pos="sticky" top="0" />
		</>
	);
};

export default HeaderComponent;

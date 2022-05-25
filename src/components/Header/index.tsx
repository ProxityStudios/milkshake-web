import { DynamicCompanyBarComponent, DynamicNavigationBarComponent } from '..';

const HeaderComponent = () => {
	return (
		<>
			{/* company bar */}
			<DynamicCompanyBarComponent />

			{/* navigation bar */}
			<DynamicNavigationBarComponent boxprops={{ position: "sticky", top: 0 }} />
		</>
	);
};

export default HeaderComponent;

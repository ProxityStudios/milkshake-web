import { HStack, StackProps, Link } from '@chakra-ui/react';
import { InfoIcon, NotAllowedIcon } from '@chakra-ui/icons';

import { UsefullLink } from '../../../types';
import IconButtonComponent from '../../IconButton';
import Constants from '../../../constants';

type CompanyBarUsefullLinksComponentProps = StackProps & {
	links?: UsefullLink[];
};

const CompanyBarUsefullLinksComponent: React.FC<CompanyBarUsefullLinksComponentProps> = (props) => {
	const usefullLinkIconSize = 'xl';

	const links: UsefullLink[] = [
		{
			url: Constants.Company.BaseURI + '/support-center',
			icon: <InfoIcon />,
			tooltip: 'Support Center',
			isExternal: true,
		},
		{
			url: Constants.Company.BaseURI + '/discord',
			icon: <NotAllowedIcon />,
			tooltip: 'Discord',
			isExternal: true,
		},
		{
			url: Constants.Company.BaseURI + '/github',
			icon: <NotAllowedIcon />,
			tooltip: 'Github',
			isExternal: true,
		},
		...(props.links ?? []),
	];

	return (
		<HStack justifyContent="flex-start" spacing="3" {...props}>
			{links.map((link, i) => (
				<IconButtonComponent
					tooltipLabel={link.tooltip}
					key={i}
					href={link.url}
					isExternal={link.isExternal}
					as={Link}
					aria-label={link.tooltip}
					icon={link.icon}
				/>
			))}
		</HStack>
	);
};

export default CompanyBarUsefullLinksComponent;

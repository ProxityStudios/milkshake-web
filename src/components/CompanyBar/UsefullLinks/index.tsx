import { HStack, StackProps, Link, Icon } from '@chakra-ui/react';
import { SiDiscord, SiGithub } from 'react-icons/si';
import { BiSupport } from 'react-icons/bi';

import { UsefullLink } from '../../../types';
import IconButtonComponent from '../../IconButton';
import Constants from '../../../constants';

type CompanyBarUsefullLinksComponentProps = StackProps & {
	links?: UsefullLink[];
};

const CompanyBarUsefullLinksComponent: React.FC<CompanyBarUsefullLinksComponentProps> = (props) => {
	const links: UsefullLink[] = [
		{
			url: Constants.Company.BaseURI + '/support-center',
			icon: <Icon as={BiSupport} />,
			tooltip: 'Support Center',
			isExternal: true
		},
		{
			url: Constants.Company.BaseURI + '/discord',
			icon: <Icon as={SiDiscord} />,
			tooltip: 'Discord',
			isExternal: true
		},
		{
			url: Constants.Company.BaseURI + '/github',
			icon: <Icon as={SiGithub} />,
			tooltip: 'Github',
			isExternal: true
		},
		...(props.links ?? [])
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

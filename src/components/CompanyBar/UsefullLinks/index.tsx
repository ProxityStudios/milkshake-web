import { HStack, StackProps, Link } from '@chakra-ui/react';
import { InfoIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { UsefullLink } from 'src/types';
import IconButtonComponent from 'src/components/IconButton';
import Constants from 'src/constants';

type CompanyBarUsefullLinksComponentProps = StackProps & {
     links?: UsefullLink[];
};

const CompanyBarUsefullLinksComponent: React.FC<CompanyBarUsefullLinksComponentProps> = (props) => {
     const usefullLinkIconSize = 'xl';

     const links: UsefullLink[] = [
          {
               url: Constants.Company.BaseURI + '/support-center',
               icon: <InfoIcon fontSize={usefullLinkIconSize} />,
               tooltip: 'Support Center',
               isExternal: true,
          },
          {
               url: Constants.Company.BaseURI + '/discord',
               icon: <NotAllowedIcon fontSize={usefullLinkIconSize} />,
               tooltip: 'Discord',
               isExternal: true,
          },
          {
               url: Constants.Company.BaseURI + '/github',
               icon: <NotAllowedIcon fontSize={usefullLinkIconSize} />,
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

import { IconButton, Tooltip, IconButtonProps, LinkProps } from '@chakra-ui/react';

export type IconButtonComponentProps = IconButtonProps & LinkProps &
{
	tooltipLabel: string;
};

const IconButtonComponent: React.FC<IconButtonComponentProps> = ({ tooltipLabel, ...props }) => {
	return (
		<Tooltip label={tooltipLabel}>
			<IconButton {...props} />
		</Tooltip>
	);
};

export default IconButtonComponent;

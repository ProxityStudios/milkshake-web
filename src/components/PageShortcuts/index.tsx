import { Box, Center, Divider, Stack, StackProps, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { QuestionIcon, DragHandleIcon } from '@chakra-ui/icons';
import Draggable from 'react-draggable';

import IconButtonComponent from '../IconButton';

type PageShortcutsComponentProps = StackProps & {};

/**
 * @version 1.0.1
 */
const PageShortcutsComponent: React.FC<PageShortcutsComponentProps> = (props) => {
	const bg = useColorModeValue('black.base', 'black');

	return (
		<Draggable handle="#move">
			<Stack spacing="2" d="inline-flex" borderRadius="xl" p="3" as={Center} bg={bg} {...props}>
				<IconButtonComponent size="lg" aria-label="Guild #1" tooltipLabel="Guild #1" icon={<QuestionIcon />} />
				<IconButtonComponent size="lg" aria-label="Guild #2" tooltipLabel="Guild #2" icon={<QuestionIcon />} />
				<IconButtonComponent size="lg" aria-label="Guild #3" tooltipLabel="Guild #3" icon={<QuestionIcon />} />
				<IconButtonComponent size="lg" aria-label="Guild #4" tooltipLabel="Guild #4" icon={<QuestionIcon />} />
				<Divider />
				<Tooltip label="Move">
					<Box id="move" cursor="move" my="2">
						<DragHandleIcon fontSize="lg" />
					</Box>
				</Tooltip>
			</Stack>
		</Draggable>
	);
};

export default PageShortcutsComponent;

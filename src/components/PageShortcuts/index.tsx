import { Center, Stack, StackProps, useColorModeValue } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import IconButtonComponent from "../IconButton";

type PageShortcutsComponentProps = StackProps & {
};

/**
 * @version 1.0.0
 */
const PageShortcutsComponent: React.FC<PageShortcutsComponentProps> = (props) => {
     const bg = useColorModeValue("black.base", "black");

     return (
          <Stack spacing="2" d="inline-flex" borderRadius="xl" p="3" as={Center} bg={bg} {...props}>
               <IconButtonComponent size="lg" aria-label="Guild #1" tooltipLabel="Guild #1" icon={<QuestionIcon />} />
               <IconButtonComponent size="lg" aria-label="Guild #2" tooltipLabel="Guild #2" icon={<QuestionIcon />} />
               <IconButtonComponent size="lg" aria-label="Guild #3" tooltipLabel="Guild #3" icon={<QuestionIcon />} />
               <IconButtonComponent size="lg" aria-label="Guild #4" tooltipLabel="Guild #4" icon={<QuestionIcon />} />
          </Stack>
     );
};

export default PageShortcutsComponent;

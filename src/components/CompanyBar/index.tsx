import { DarkMode, Box, Button, Container, Link, ContainerProps, Flex, Image, HStack, StackDivider, SlideFade, Menu, MenuButton, MenuList, MenuItem, Portal } from '@chakra-ui/react';

import CompanyBarNavigationComponent from './Navigation';
import CompanyBarUsefullLinksComponent from './UsefullLinks';
import CompanyLogo from "src/assets/images/proxity-studios-logo-512.png";
import CompanyBarToolsComponent from './Tools';
import Constants from 'src/constants';
import { useCompanyContext, useCompanyUpdateContext } from 'src/contexts/CompanyContext';
import { ChevronDownIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';

type CompanyBarProps = ContainerProps & {};

const CompanyBar: React.FC<CompanyBarProps> = (props) => {
  const companyContext = useCompanyContext();
  const companyUpdateContext = useCompanyUpdateContext();

  return (
    <DarkMode>
      <Box bg="#202020" color="white" overflow="hidden">
        <Container maxW={companyContext.bar.isWide ? "initial" : "container.xl"} py="3" {...props}>
          <Flex alignItems="center" justifyContent="space-between">

            {/* left side */}
            <SlideFade delay={0.5} in offsetX={-500}>
              <HStack spacing="5" divider={<StackDivider />}>
                <CompanyBarUsefullLinksComponent />
                <CompanyBarToolsComponent />
              </HStack>
            </SlideFade>

            {/* center */}
            <Flex alignItems="center" pos="absolute" left="50%" right="50%" transform="translateX(-50%)" w="max-content">
              <Link href={Constants.Company.BaseURI} isExternal>
                <Image boxSize="55" src={CompanyLogo.src} alt="Company Logo" />
              </Link>
            </Flex>

            {/* right side */}
            <SlideFade delay={0.5} in offsetX={500}>
              <Flex alignItems="center">
                <CompanyBarNavigationComponent mr="6" />
                {
                  companyContext.user.isLogged ? <>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        aria-label='My Profile'
                        icon
                        variant='outline'
                      >{companyContext.user.displayName}</MenuButton>
                      <Portal>
                        <MenuList zIndex={2}>
                          <MenuItem icon={<ExternalLinkIcon fontSize="lg" />} command='⌘N'>
                            Profile
                          </MenuItem>
                          <MenuItem icon={<RepeatIcon fontSize="lg" />} command='⌘⇧N'>
                            Open Closed Tab
                          </MenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                  </> :
                    // @ts-ignore
                    <Button variant="outline" onClick={() => companyUpdateContext.signInUser({
                      isLogged: true,
                      displayName: "Crawl",
                      email: "crawl@proxitystudios.tk",
                      password: "supersecretpassword",
                      username: "crawl#0000"
                    })}>Sign In</Button>
                }
              </Flex>
            </SlideFade>

          </Flex>
        </Container>
      </Box>
    </DarkMode>
  );
};

export default CompanyBar;

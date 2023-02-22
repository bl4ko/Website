import { useState, useEffect } from 'react';
import Logo from './logo';
import { Link, useLocation } from 'react-router-dom';
import { Container, Box, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react';
import HamburgerIcon from './icons/Hamburger';
import ThemeToggleButton from './ThemeToggleButton';
import { bgGrey2, green } from '../colors';

function LinkItem({ href, path, children, ...props }) {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname === href);
    }, [location.pathname, href]);

    return (
        <Link
            to={href}
            className={`p-2 ${props}`}
            style={{ backgroundColor: active ? green : 'transparent' }}
            preventScrollReset={true}
        >
            {children}
        </Link >
    );
}

export default function Navbar(props) {
    const { path } = props;

    return (
        <Box as="nav" w="100%" bg={useColorModeValue('#ffffff40', bgGrey2)} css={{ backdropFilter: 'blur(10px)' }} zIndex={2} {...props}>
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Logo />
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    align="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/blogs" path={path}>
                        Blogs
                    </LinkItem>
                    <LinkItem href="https://www.github.com/bl4ko">
                        Github
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as='a' href="/">
                                    Home
                                </MenuItem>
                                <MenuItem as='a' href="/projects">
                                    Projects
                                </MenuItem>
                                <MenuItem as='a' href="/blogs">
                                    Blogs
                                </MenuItem>
                                <MenuItem as='a' href="https://www.github.com/bl4ko">
                                    Github
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
}
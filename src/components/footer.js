import { Box } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Bl4ko <a href='https://github.com/bl4ko'>github</a>
        </Box>
    );
}
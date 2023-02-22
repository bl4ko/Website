import {
    Box,
    Heading,
    Text,
    Container,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <hr className="mb-4 mt-4" />
            <Box my={6} align="center">
                <Link to="/">
                    <Button colorScheme="teal">
                        Return to home
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
import { Container, Divider, Text, Stack, Link, Box } from "@chakra-ui/react"

function Footer() {
    return (
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
            <Container maxW={"100%"} mt={20} height={"100px"}>
                <Divider />
                <Container maxW={"1400px"} py={4}>
                    <Stack>
                        <Stack direction="row" spacing="4" align="center" justify="space-between">
                            <Text fontWeight={"bold"}>Token Transfer</Text>
                            <Stack direction="row" spacing="4">
                                <Link href="/about">About Us</Link>
                                <Link href="/terms">Terms & Conditions</Link>
                                <Link href="/privacy">Privacy Policy</Link>
                            </Stack>
                        </Stack>
                        <Text>© 2023 Token transfer. All rights reserved.</Text>
                    </Stack>
                </Container>
            </Container>
        </Box>
    )
}

export default Footer;

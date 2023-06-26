import { Container, Flex, Text } from "@chakra-ui/react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import Link from "next/link"

export default function NavBar() {
    const address = useAddress();


    return (
        <Container maxW={"1440px"} py={4}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link href={"/"}>
                    <Text fontWeight={"bold"}>
                        Transfer Tokens To Family & Friends
                    </Text>
                </Link>
                {address && (
                    <Flex>
                    <Link href={"/transfer"}>
                        <Text mr={8}>
                            Transfer
                        </Text>
                    </Link>
                    <Link href={"/claim"}>
                        <Text mr={8}>
                            Claim
                        </Text>
                    </Link>
                    <Link href={`/profile/${address}`}>
                        <Text mr={8}>
                            Balance
                        </Text>
                    </Link>
                    </Flex>
                )}
                <ConnectWallet />
            </Flex>
        </Container>
    )
}
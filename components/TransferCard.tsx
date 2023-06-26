import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import TokenSelection from "./TokenSelection";

export default function TransferCard() {
    const address = useAddress();

    const {
        contract
    } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading
    } = useContractRead(contract, 
        "getVerifiedTokens",
        );

        const [selectedToken, setSelectedToken] = useState("");
        const handleTokenSelection = (tokenAddress: string) => {
            setSelectedToken(tokenAddress);
        }

        return (
            <Card w={"50%"} p={20}> 
                <Heading fontWeight={"bold"}>Transfer</Heading>

                <Text mt={4}>Select Token:</Text>
                <Flex>
                {!isVerifiedTokensLoading && 
                    verifiedTokens.map((tokenAddress: string) => (
                        <Box
                            key={tokenAddress}
                            onClick={() => handleTokenSelection(tokenAddress)}
                        >
                            <TokenSelection 
                                tokenAddress={tokenAddress}
                                isSelected={selectedToken === tokenAddress}
                            />
                        </Box>
                    ))}
                </Flex>
            </Card>
        )
}
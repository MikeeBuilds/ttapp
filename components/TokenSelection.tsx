import { Box, Card, Heading, Spinner, Text } from "@chakra-ui/react";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

type Props = {
    tokenAddress: string,
    isSelected?: boolean,
};


const TokenSelection: React.FC<Props> = ({ tokenAddress, isSelected }) => {
    const {
        contract
    } = useContract(tokenAddress);

    const {
        data: contractMetaData,
        isLoading: isContractMetaDataLoading
    } = useContractMetadata(contract);

    let coinBorderColor = "gray.200";
    if (isSelected) {
        coinBorderColor = "purple.500";
    }


    return (
        <Card mr={2} border={"2px solid"} p={4} borderColor={coinBorderColor}>
            {!isContractMetaDataLoading ? (
                <Box>
                    <Text>{contractMetaData.symbol}</Text>
                </Box>
            ) : (
                <Spinner />
            )}
        </Card>
    )
};


export default TokenSelection;
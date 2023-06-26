import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import { Card } from "@chakra-ui/react";

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
        console.log(verifiedTokens);

        return (
            <Card w={"50%"} p={20}> 

            </Card>
        )
}
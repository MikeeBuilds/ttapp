import { Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";

type Props = {
    step: string;
    title: string;
    description: string;
};


const Featurecard: React.FC<Props> = ({ step, title, description }) => {
    return (
        <Card px={8} py={10}>
            <Stack spacing={8}>
                <Flex flexDirection={"row"} alignItems={"center"}>
                    <Text fontSize={"lg"} mr={4}>
                        {step}
                    </Text>
                    <Heading fontSize={"2xl"}>
                        {title}
                    </Heading>
                </Flex>
                <Text fontSize={"lg"} ml={10}>
                    {description}
                </Text>
            </Stack>
        </Card>
    )
};


export default Featurecard;
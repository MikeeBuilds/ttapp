import { Container, Flex, Heading, Stack, Text, Link, Button } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} py={2}>
      <Flex flexDirection={"row"}>
        <Flex flexDirection={"column"} justifyContent={"center"} width={"60%"}>
          <Stack spacing={4}>
            <Heading fontSize={"xl"}>Transfer Token</Heading>
            <Heading fontSize={"6xl"}>A simple dApp that allows you to transfer tokens.</Heading>
            <Text fontSize={"xl"}>Select from a selection of tokens to transer to your friends and family</Text>
            <Link href={"/transfer"}>
              <Button colorScheme={"blue"}>Make A Transfer</Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;

import { Container, Flex, Heading, Stack, Text, Link, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import Featurecard from "../components/Featurecard";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} py={2}>
      <Flex flexDirection={"row"} h={"75vh"}>
        <Flex flexDirection={"column"} justifyContent={"center"} width={"60%"}>
          <Stack spacing={4}>
            <Heading fontSize={"xl"} fontWeight={"bold"}>Transfer Token</Heading>
            <Heading fontSize={"6xl"}>A simple dApp that allows you to transfer tokens.</Heading>
            <Text fontSize={"xl"}>Select from a selection of tokens to transer to your friends and family. Write a message to go along with your token transfer</Text>
            <Link href={"/transfer"}>
              <Button>Make A Transfer</Button>
            </Link>
          </Stack>
        </Flex>
        <Box>
          <MediaRenderer 
            src={HERO_IMAGE_URL}
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
      <Flex flexDirection={["column-reverse", "column-reverse", "row"]} mt={4}>
        <Box flex={1}>
          <MediaRenderer
              src={FEATURES_IMAGE_URL}
              width="80%"
              height="100%"
          />
        </Box>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} flex={1}>
          <Stack spacing={4}>
            <Featurecard 
              step={"01"}
              title={"Select A Token"}
              description={"Select from a list of tokens to transfer to your friends and family."}
            />
            <Featurecard 
              step={"02"}
              title={"Who To Send To"}
              description={"Enter the wallet address of the person you want to send the token to"}
            />
            <Featurecard 
              step={"03"}
              title={"Write a Message"}
              description={"Write a message to go along with your token transfer. This is optional but its always nice to send a message to your friends and family"}
            />
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;

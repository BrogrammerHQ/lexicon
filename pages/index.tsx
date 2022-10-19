import { gql } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { nhost } from "./_app";
import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";
import { Router } from "next/router";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lexicon</title>
        <meta name="description" content="Lexicon - Jargon Dictionary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxW="8xl" padding={"1rem"} height="100vh">
          <Flex direction={"column"} height="full">
            <Flex direction={"column"} height="full" flex={1}>
              <Flex
                direction={{ base: "column", lg: "row" }}
                paddingBottom={{ base: 16, lg: 24 }}
                alignItems="center"
              >
                <Heading
                  as="h1"
                  textAlign="center"
                  size={{ base: "xl", lg: "2xl" }}
                >
                  {"Don't Miss Out on Conversations"}
                </Heading>
                <Flex alignItems="center" justifyContent="center" padding={4}>
                  <Image src={"./hero_img.svg"} alt="" />
                </Flex>
              </Flex>
              <Heading
                as="h2"
                textAlign="center"
                size={{ base: "lg", lg: "xl" }}
                padding={4}
              >
                Concepts 101
              </Heading>
              <Heading
                as="h2"
                textAlign="center"
                size={{ base: "lg", lg: "xl" }}
                padding={4}
              >
                Jargons 101
              </Heading>
            </Flex>
            <Flex alignItems="center" justifyContent="center" padding={4}>
              <LoginButton />
            </Flex>
          </Flex>
        </Container>
      </main>
    </div>
  );
};

export default Home;

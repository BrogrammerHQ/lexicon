import { gql } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
} from "next";
import Link from "next/link";
import React from "react";
import Bookmark from "../../../../components/Icons/Bookmark";
import Like from "../../../../components/Icons/Like";
import JargonListItem from "../../../../components/JargonListItem";
import { nhost } from "../../../_app";

function Jargon({ jargon }: any) {
  return (
    <main>
      <Container maxW="md" padding={0} height="100vh">
        <Flex flexDir={"column"} height="full">
          <Box flex={1}>
            {jargon.img && (
              <Image src={jargon.img} alt={jargon.title} width="100%" />
            )}
            <Box p={6}>
              <Heading
                as="h2"
                fontSize="2xl"
                fontWeight="semibold"
                textAlign="left"
              >
                {jargon.title}
              </Heading>
              <Text padding={"1rem 0"} fontSize="xl" textAlign={"justify"}>
                {jargon.long_desc}
              </Text>
            </Box>
          </Box>
          <Box p={6}>
            <Flex flexDirection={"row-reverse"} gap={2}>
              <IconButton aria-label="Like" icon={<Like />} />
              <IconButton aria-label="Bookmark" icon={<Bookmark />} />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryId = context.params && context.params.category;
  const jargonId = context.params && context.params.jargon;

  const GET_JARGON = gql`
  {
	jargons(where: {id: {_eq: "${jargonId}"}}) {
	  id
	  title
	  link
	  img
	  long_desc
	  short_desc
	}
  }`;

  const data = await nhost.graphql.request(GET_JARGON);

  if (data.error) {
    console.log(data.error);
    return {
      props: {
        error: data.error,
      },
    };
  }

  return {
    props: {
      jargon: data.data.jargons[0],
      category_id: categoryId,
      jargon_id: jargonId,
    },
  };
};

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default Jargon;

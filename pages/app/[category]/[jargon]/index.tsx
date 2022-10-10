import { gql } from "@apollo/client";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import JargonListItem from "../../../../components/JargonListItem";
import { nhost } from "../../../_app";

function Jargon({ jargon }: any) {
  return (
    <main>
      <Container maxW="md" padding={0}>
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
      </Container>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

export default Jargon;
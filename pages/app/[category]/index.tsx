import { gql } from "@apollo/client";
import { Box, Container } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Heading from "../../../components/Heading";
import JargonListItem from "../../../components/JargonListItem";
import SearchBox from "../../../components/SearchBox";
import { nhost } from "../../_app";

function Category({ jargons, title, category_id }: any) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <Container maxW="md" padding={"1rem"}>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Heading text={title} />
        {jargons
          .filter(
            // (el: any) => el.title.toUpperCase() === searchTerm.toUpperCase()
            (el: any) => {
              const reg = new RegExp(`${searchTerm.toUpperCase()}`);
              return reg.test(el.title.toUpperCase());
            }
          )
          .map((jargon: any) => (
            <Link href={`/app/${category_id}/${jargon.id}`} key={jargon.id}>
              <Box key={jargon.id}>
                <JargonListItem title={jargon.title} id={jargon.id} />
              </Box>
            </Link>
          ))}
      </Container>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryId = context.params && context.params.category;

  const GET_JARGONS_LIST = gql`
    {
      jargons(
        where: { category: { _eq: "${categoryId}" } }
      ) {
        id
        title
      }

      jargon_categories(
        where: { id: { _eq: "${categoryId}" } }
      ) {
        title
        id
      }
    }
  `;

  const data = await nhost.graphql.request(GET_JARGONS_LIST);

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
      jargons: data.data.jargons,
      title: data.data.jargon_categories[0].title,
      category_id: categoryId,
    },
  };
};

export default Category;

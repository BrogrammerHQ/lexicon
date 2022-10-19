import { gql } from "@apollo/client";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import CategoriesBox from "../../components/CategoriesBox";
import FeaturedBox from "../../components/FeaturedBox";
import SearchBox from "../../components/SearchBox";
import { nhost } from "../_app";

const App: NextPage = ({ jargon_categories }: any) => {
  return (
    <div>
      <Head>
        <title>Lexicon</title>
        <meta name="description" content="Lexicon - Jargon Dictionary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxW="md" padding={"1rem"}>
          <SearchBox />
          <Grid
            h="200px"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            padding={"1rem 0"}
          >
            <GridItem>
              <FeaturedBox
                imageAlt=""
                imageUrl="bookmark.svg"
                title="Bookmarks"
                backgroundColor="#FF3B30"
              />
            </GridItem>
            <GridItem>
              <FeaturedBox
                imageAlt=""
                imageUrl="trending.png"
                title="Trending"
                backgroundColor="#79C8A6"
              />
            </GridItem>
          </Grid>
          <Grid
            h="150px"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            padding={"1rem 0"}
          >
            {jargon_categories &&
              jargon_categories?.map((jargon_category: any) => {
                return (
                  <GridItem key={jargon_category.id}>
                    <CategoriesBox
                      imageAlt=""
                      id={jargon_category.id}
                      imageUrl={jargon_category.img}
                      title={jargon_category.title}
                      backgroundColor="#FF3B30"
                    />
                  </GridItem>
                );
              })}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const GET_CATEGORIES_LIST = gql`
    {
      jargon_categories {
        id
        title
        img
      }
    }
  `;

  // const nhostSession = await useQuery(GET_CATEGORIES_LIST);
  const data = await nhost.graphql.request(GET_CATEGORIES_LIST);

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
      jargon_categories: data.data.jargon_categories,
    },
  };
};

export default App;

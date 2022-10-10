import { gql, useQuery } from "@apollo/client";
import { useUserData } from "@nhost/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next/types";
import { nhost } from "./_app";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Container,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  InputLeftElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import SearchBox from "../components/SearchBox";
import FeaturedBox from "../components/FeaturedBox";
import CategoriesBox from "../components/CategoriesBox";

const Home: NextPage = ({ jargon_categories }: any) => {
  console.log(jargon_categories);

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
                  // <div key={jargon_category.id}>
                  //   <Image
                  //     src={jargon_category.img}
                  //     alt="lol"
                  //     height={200}
                  //     width={200}
                  //   />
                  //   <h1>{jargon_category.title}</h1>
                  // </div>
                );
              })}
            {/* <GridItem>
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
            <GridItem>
              <FeaturedBox
                imageAlt=""
                imageUrl="trending.png"
                title="Trending"
                backgroundColor="#79C8A6"
              />
            </GridItem> */}
          </Grid>
        </Container>
        {/* {jargon_categories &&
          jargon_categories?.map((jargon_category: any) => {
            return (
              <div key={jargon_category.id}>
                <Image
                  src={jargon_category.img}
                  alt="lol"
                  height={200}
                  width={200}
                />
                <h1>{jargon_category.title}</h1>
              </div>
            );
          })} */}
        {/* <HStack spacing="24px">
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </HStack> */}
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

export default Home;

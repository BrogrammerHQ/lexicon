import { gql, useQuery } from "@apollo/client";
import { useUserData } from "@nhost/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next/types";
import styles from "../styles/Home.module.css";
import { nhost } from "./_app";

const Home: NextPage = ({ jargon_categories }: any) => {
  console.log(jargon_categories);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {jargon_categories &&
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
          })}
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

  console.log(data.data);

  return {
    props: {
      jargon_categories: data.data.jargon_categories,
    },
  };
};

export default Home;

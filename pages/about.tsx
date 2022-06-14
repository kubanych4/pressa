import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import axios from 'axios';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import React from "react";
import {useTranslation} from "next-i18next";
// import type { NextApiRequest, NextApiResponse } from 'next';

type Github = {
  stars: number | string;
};
const About: NextPage<Github> = (props) => {
  const { t } = useTranslation("general");
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2 className={styles.title}>About page</h2>
        <div>Random word: {props.stars}</div>
        <div>{t("doc.title")}</div>
        <div>
          <Link href="/">
            <a>BACK</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ res }) => {
//   res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=10');
//   const response = await axios.get(' https://san-random-words.vercel.app/');
//   return {
//     props: {
//       stars: response.data[0].word,
//     },
//   };
// };
// export async function getServerSideProps({ res }: GetServerSideProps<gssp>) {
//   res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
//   const response = await axios.get(' https://san-random-words.vercel.app/');
//   return {
//     props: {
//       stars: response.data[0].word,
//     },
//   };
// }

export default About;

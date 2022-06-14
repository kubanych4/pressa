import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import React from "react";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Projects: NextPage = () => {
  const { t } = useTranslation("general");
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h2 className={styles.title}>Projects</h2>
        <div>{t("doc.title")}</div>
      </main>
    </div>
  );
};

type StaticType = React.PropsWithChildren<{
  locale: any;
}>;

export const getStaticProps = async ({ locale }: StaticType) => ({
  props: {
    ...(await serverSideTranslations(locale, ["general"]))
  }
});

export default Projects;

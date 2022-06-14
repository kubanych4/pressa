import React from 'react';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '../styles/Home.module.scss';

const Error: NextPage = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>404</h2>
    </main>
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

export default Error;

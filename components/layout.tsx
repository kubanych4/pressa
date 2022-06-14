import Head from 'next/head';
import React from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>КООМ ПРЕСС - Новости Кыргызстана. Последние новости Кыргызстана на сегодня</title>
        <meta name="description" content="КООМ ПРЕСС - Новости Кыргызстана. Последние новости Кыргызстана на сегодня" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar />
          {children}
        <Footer />
      </main>
    </>
  );
};

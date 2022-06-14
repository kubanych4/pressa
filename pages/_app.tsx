import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Layout } from '../components/layout';
import React from "react";
import '../styles/globals.scss';
import Router from 'next/router';
//@ts-ignore
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);

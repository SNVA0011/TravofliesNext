import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css'
import React, { useEffect } from "react";
import Layout from '../component/layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const lang = pathname.startsWith("/artikel") ? "nl" : pathname.startsWith("/nouvelles") ? "fr" : pathname.startsWith("/articulo") ? "es" : pathname.startsWith("/bloggen") ? "de" : pathname.startsWith("/articolo") ? "it" : pathname.startsWith("/artigo") ? "pt" : "en-US";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> 
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp 
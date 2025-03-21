import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.css';
import '@city-frontend-test/ui/styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ManCity Search</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

import Navbar from '@src/components/nav';
import { Reset } from '@src/styles/reset';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

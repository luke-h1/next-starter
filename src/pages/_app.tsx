import { Container } from '@src/components/Container';
import Navbar from '@src/components/nav';
import { Reset } from '@src/styles/Reset';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;

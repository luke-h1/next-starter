import { Container } from '@src/components/Container';
import Navbar from '@src/components/nav';
import { Reset } from '@src/styles/Reset';
import type { AppProps } from 'next/app';
import '@fontsource/noto-sans-jp';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import * as gtag from '@src/utils/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
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

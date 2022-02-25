import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga4';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../src/components';
import 'aos/src/sass/aos.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hotjar.initialize(2849027, 6);
    ReactGA.initialize('G-TH4LW9Q0HB');
    ReactGA.send('pageview');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;

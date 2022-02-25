import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../src/components';
import 'aos/src/sass/aos.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hotjar.initialize(2849027, 6);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;

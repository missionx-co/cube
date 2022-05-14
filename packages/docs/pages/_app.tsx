import { cubeStyles } from '@cube-ui/components';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  cubeStyles();

  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

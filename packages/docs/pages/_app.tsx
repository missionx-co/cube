import { cubeStyles } from '@cube-ui/components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  cubeStyles();

  if (router.pathname === '/') {
    return (
      <>
        <Head>
          <meta
            property="og:title"
            content="Cube - Build React SPAs faster with React and TailwindCSS"
          />
          <meta
            property="og:description"
            content="Design System, UI Kit and an Admin dashboard built with React and Tailwind CSS."
          />
          <meta
            property="og:image"
            content="https://cube.mohammedmanssour.me/cube_facebook.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ManssourMhd" />
          <meta
            name="twitter:title"
            content="Cube - Build React SPAs faster with React and TailwindCSS"
          />
          <meta
            name="twitter:description"
            content="Design System, UI Kit and an Admin dashboard built with React and Tailwind CSS."
          />
          <meta
            property="twitter:image"
            content="https://cube.mohammedmanssour.me/cube_twitter.png"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <Layout>
      <Head>
        <meta
          property="og:title"
          content="Cube - Build React SPAs faster with React and TailwindCSS"
        />
        <meta
          property="og:description"
          content="Design System, UI Kit and an Admin dashboard built with React and Tailwind CSS."
        />
        <meta
          property="og:image"
          content="https://cube.mohammedmanssour.me/cube_facebook.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ManssourMhd" />
        <meta
          name="twitter:title"
          content="Cube - Build React SPAs faster with React and TailwindCSS"
        />
        <meta
          name="twitter:description"
          content="Design System, UI Kit and an Admin dashboard built with React and Tailwind CSS."
        />
        <meta
          property="twitter:image"
          content="https://cube.mohammedmanssour.me/cube_twitter.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

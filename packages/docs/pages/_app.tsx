import "../styles/globals.css";
import type { AppProps } from "next/app";
import { cubeStyles } from "@cube/components";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  cubeStyles();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { untitledUIStyles } from "@untitled-ui/components";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  untitledUIStyles();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

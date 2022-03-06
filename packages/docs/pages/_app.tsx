import "../styles/globals.css";
import type { AppProps } from "next/app";
import { untitledUIStyles } from "@untitled-ui/components";

function MyApp({ Component, pageProps }: AppProps) {
  untitledUIStyles();
  return <Component {...pageProps} />;
}

export default MyApp;

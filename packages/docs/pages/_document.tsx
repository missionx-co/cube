import { getCubeCssText } from '@cube-ui/components';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* Stitches CSS for SSR */}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCubeCssText() }}
            />
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans text-base bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

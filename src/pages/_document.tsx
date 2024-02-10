import { Html, Head, Main, NextScript } from "next/document";
import { augmentDocumentWithEmotionCache } from "./_app";
import { ColorSchemeScript } from "@mantine/core";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Example with TSS and Pages router" />
        <ColorSchemeScript defaultColorScheme={"light"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

augmentDocumentWithEmotionCache(Document);

export default Document;

import Head from "next/head";
import { AppProps } from "next/app";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { theme } from "@/theme";

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />;
    </MantineProvider>
  );
}
//You can also pass your custom App if you have one.
export default withAppEmotionCache(App);

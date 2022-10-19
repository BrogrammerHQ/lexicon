import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Script from "next/script";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NhostNextProvider
          nhost={nhost}
          // initial={
          //   pageProps.hasOwnProperty("nhostSession") ? pageProps?.nhostSession : {}
          // }
        >
          <NhostApolloProvider nhost={nhost}>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-SSZRQYQ6GJ"
            />
            <Script id="google-analytics">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SSZRQYQ6GJ');  
          `}
            </Script>
            <Component {...pageProps} />
          </NhostApolloProvider>
        </NhostNextProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
export { nhost };

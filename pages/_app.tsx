import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostNextProvider
      nhost={nhost}
      // initial={
      //   pageProps.hasOwnProperty("nhostSession") ? pageProps?.nhostSession : {}
      // }
    >
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
export { nhost };
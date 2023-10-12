import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import AuthenticatedRouteGuard from "@/context/AuthenticationGuard";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

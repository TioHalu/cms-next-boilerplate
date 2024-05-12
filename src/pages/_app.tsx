import "@/styles/globals.css";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import MainProvider from "@/components/providers/main-provider/main.provider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <MainProvider>{getLayout(<Component {...pageProps} />)}</MainProvider>;
};

export default MyApp;
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

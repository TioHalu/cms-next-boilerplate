import { App, ConfigProvider } from "antd";
import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

import MenuProvider from "@/components/providers/menu-provider/menu.provider";
import { MainTheme } from "@/components/themes/main.theme";

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider theme={MainTheme}>
      <App>
        <Head>
          <title>CMS</title>
        </Head>
        <MenuProvider>{children}</MenuProvider>
      </App>
    </ConfigProvider>
  );
};

export default MainProvider;

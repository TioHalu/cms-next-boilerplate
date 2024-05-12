import { GetProps, Layout } from "antd";
import React from "react";

type BaseLayoutProps = GetProps<typeof Layout> & {};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Layout className="h-screen w-full overflow-y-auto overflow-x-hidden bg-[#F8FAFF]">
      {children}
    </Layout>
  );
};

export default BaseLayout;

import { GetProps, Layout } from "antd";
import React from "react";

import HeaderFeature from "@/components/organisms/header-feature/header-feature";
import MenuSiderFeature from "@/components/organisms/menu-sider-feature/menu-sider-feature";
import BaseLayout from "@/components/templates/base-layout/base.layout";

type BaseLayoutProps = GetProps<typeof Layout> & {};

const { Content } = Layout;

const FeatureLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <BaseLayout>
      <HeaderFeature />
      <Content>
        <Layout hasSider>
          <MenuSiderFeature />
          <Content>{children}</Content>
        </Layout>
      </Content>
    </BaseLayout>
  );
};

export default FeatureLayout;

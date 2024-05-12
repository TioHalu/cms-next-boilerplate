import { Flex, Layout, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";

import { useMenuHook } from "@/components/hooks/menu-hook/menu-hook";
import IButtonToggleMenu from "@/components/molecules/buttons/i-button-toggle-menu";

const { Sider } = Layout;
const { Title } = Typography;

const MenuSiderFeature = () => {
  const bp = useBreakpoint(true);
  const { isCollapsed, toggleCollapsed } = useMenuHook();

  /* const items: MenuProps["items"] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  })); */

  return (
    <Sider
      className="!fixed left-0 top-[124px] overflow-y-auto lg:!sticky lg:top-[102px]"
      style={{ height: `calc(100vh - ${bp.lg ? "102px" : "124px"})` }}
      width={300}
      collapsedWidth={bp.lg ? 90 : 0}
      defaultCollapsed={bp.lg}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={isCollapsed}
    >
      <Flex
        justify="space-between"
        className="px-2"
      >
        {!isCollapsed && (
          <Title
            level={5}
            className="!m-0 !self-center !text-primary"
          >
            Self Service Banking
          </Title>
        )}
        {isCollapsed && (
          <Title
            level={5}
            className="!m-0 !inline !self-center !text-primary"
          >
            SSB
          </Title>
        )}
        {bp.lg && (
          <IButtonToggleMenu
            style={{ verticalAlign: "middle" }}
            isCollapse={isCollapsed}
            onClick={toggleCollapsed}
          />
        )}
      </Flex>
    </Sider>
  );
};

export default MenuSiderFeature;

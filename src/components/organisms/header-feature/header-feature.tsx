import { LogoutOutlined, MailOutlined } from "@ant-design/icons";
import {
  Avatar,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  Space,
  Typography,
} from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";

import LogoWhiteIcon from "@/components/atoms/icons/logo-white.icon";
import { useMenuHook } from "@/components/hooks/menu-hook/menu-hook";
import IButtonToggleMenu from "@/components/molecules/buttons/i-button-toggle-menu";
import useHeaderFeature from "@/components/organisms/header-feature/use-header-feature";
import { generateInitial } from "@/utils/string.util";

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderFeature = () => {
  const bp = useBreakpoint(true);
  const { isCollapsed, toggleCollapsed } = useMenuHook();
  const { lastLogin, lastLogout, roleName, username, onClickLogout } =
    useHeaderFeature();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "-",
      disabled: true,
      icon: <MailOutlined />,
    },
    {
      key: "2",
      type: "divider",
    },
    {
      key: "3",
      danger: true,
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: onClickLogout,
    },
  ];

  return (
    <div className="sticky top-0 z-[1] w-full">
      <Header className="flex w-full items-center justify-between !px-[16px] md:justify-between md:!px-[25px]">
        <LogoWhiteIcon />
        <Space
          direction="horizontal"
          size={20}
          align="center"
          style={{ lineHeight: "normal" }}
        >
          <Space
            direction="vertical"
            size={0}
            align="end"
            style={{ lineHeight: "normal" }}
          >
            <Title
              level={5}
              className="!m-0 max-w-28 truncate !text-white md:max-w-xl"
            >
              Halo, {username}
            </Title>
            <Text className="!m-0 max-w-28 truncate !text-white md:max-w-xl">
              {roleName}
            </Text>
          </Space>
          <Dropdown
            menu={{ items }}
            className="cursor-pointer"
            overlayClassName="md:w-[20%] w-[85%]"
          >
            <Avatar size="large">{generateInitial(username)}</Avatar>
          </Dropdown>
        </Space>
      </Header>
      <div className="bg-white p-[8px]">
        <Space className="w-full justify-between lg:justify-end">
          {!bp.lg && (
            <IButtonToggleMenu
              style={{ verticalAlign: "middle" }}
              isCollapse={isCollapsed}
              onClick={toggleCollapsed}
            />
          )}
          <Flex
            justify={bp.lg ? "end" : "space-between"}
            align={bp.lg ? "middle" : "end"}
            vertical={!bp.lg}
            gap={bp.lg ? 10 : 0}
          >
            <Typography.Text>Last Login Date : {lastLogin}</Typography.Text>
            <Typography.Text className="text-right">
              Last Logout Date : {lastLogout}
            </Typography.Text>
          </Flex>
        </Space>
      </div>
    </div>
  );
};

export default HeaderFeature;

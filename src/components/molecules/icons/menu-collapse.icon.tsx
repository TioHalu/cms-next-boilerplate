import Icon from "@ant-design/icons";
import { FC } from "react";

import MenuCollapseActiveIcon from "@/components/atoms/icons/menu-collapse-active.icon";
import MenuCollapseInactiveIcon from "@/components/atoms/icons/menu-collapse-inactive.icon";
import { IconSvgMenuProps } from "@/components/molecules/icons/index";

const MenuCollapseIcon: FC<IconSvgMenuProps> = ({ isActive, size }) => {
  return (
    <Icon
      component={() =>
        isActive ? (
          <MenuCollapseActiveIcon size={size ?? "24px"} />
        ) : (
          <MenuCollapseInactiveIcon size={size ?? "24px"} />
        )
      }
    />
  );
};
export default MenuCollapseIcon;

import React, { useMemo } from "react";

import { SizeIcon } from "@/components/atoms/i-button";
import IButton, { IButtonProps } from "@/components/atoms/i-button/i-button";
import MenuCollapseIcon from "@/components/molecules/icons/menu-collapse.icon";

type IButtonToggleMenuProps = IButtonProps & {
  isCollapse?: boolean | undefined;
};

const IButtonToggleMenu = ({
  isCollapse,
  type,
  size,
  ...props
}: IButtonToggleMenuProps) => {
  const sizeIcon = useMemo(() => {
    return SizeIcon(size);
  }, [size]);
  return (
    <IButton
      id={`IButtonToggleMenu${props.id ? `-${props.id}` : ""}`}
      type={type ?? "text"}
      size={size ?? "large"}
      icon={
        <MenuCollapseIcon
          size={sizeIcon}
          isActive={isCollapse}
        />
      }
      {...props}
    />
  );
};

export default IButtonToggleMenu;

import Icon from "@ant-design/icons";
import React, { FC, SVGProps } from "react";

type MenuCollapseActiveIconProps = SVGProps<SVGSVGElement> & {
  size?: string | number;
  clearStyle?: boolean;
};
const MenuCollapseActiveIcon: FC<MenuCollapseActiveIconProps> = ({
  size,
  width,
  fill,
  clearStyle,
  style,
  ...props
}) => {
  return (
    <Icon
      className="anticon-menu-collapse"
      component={() => (
        <svg
          width={size ?? width ?? "24"}
          viewBox="0 0 24 24"
          fill={fill ?? "currentColor"}
          xmlns="http://www.w3.org/2000/svg"
          style={
            !clearStyle
              ? {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  ...style,
                }
              : style
          }
          {...props}
        >
          <path
            opacity="0.4"
            d="M16.48 2H8.52C5.07 2 3 4.06 3 7.52V15.47C3 18.94 5.07 21 8.52 21H16.47C19.93 21 21.99 18.94 21.99 15.48V7.52C22 4.06 19.93 2 16.48 2Z"
            fill="#850C1A"
          />
          <path
            d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
            fill="#850C1A"
          />
          <path
            d="M18.7504 5.95C18.7504 5.86 18.7304 5.78 18.7004 5.69C18.7004 5.68 18.6904 5.67 18.6904 5.67C18.6604 5.6 18.6104 5.53 18.5604 5.48C18.5404 5.46 18.5204 5.44 18.5004 5.43C18.4504 5.39 18.4004 5.35 18.3504 5.33C18.3304 5.32 18.3004 5.31 18.2804 5.3C18.2004 5.27 18.1104 5.25 18.0204 5.25H14.0004C13.5904 5.25 13.2504 5.59 13.2504 6C13.2504 6.41 13.5804 6.72 14.0004 6.72H16.2104L12.4704 10.47C12.1804 10.76 12.1804 11.24 12.4704 11.53C12.6204 11.68 12.8104 11.75 13.0004 11.75C13.1904 11.75 13.3804 11.68 13.5304 11.53L17.2604 7.79V9.99C17.2604 10.4 17.6004 10.74 18.0104 10.74C18.4204 10.74 18.7604 10.4 18.7604 9.99V5.97C18.7604 5.96 18.7604 5.96 18.7504 5.95Z"
            fill="#850C1A"
          />
        </svg>
      )}
    />
  );
};

export default MenuCollapseActiveIcon;

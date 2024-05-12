import Icon from "@ant-design/icons";
import React, { FC, SVGProps } from "react";

type MenuCollapseInactiveIconProps = SVGProps<SVGSVGElement> & {
  size?: string | number;
  clearStyle?: boolean;
};

const MenuCollapseInactiveIcon: FC<MenuCollapseInactiveIconProps> = ({
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
            d="M7.52 22H15.48C18.93 22 21 19.94 21 16.48V8.53C21 5.06 18.93 3 15.48 3H7.53C4.07 3 2.01 5.06 2.01 8.52V16.48C2 19.94 4.07 22 7.52 22Z"
            fill="#850C1A"
          />
          <path
            d="M13 7.85V5.15C13 2.9 13.9 2 16.15 2H18.85C21.1 2 22 2.9 22 5.15V7.85C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85Z"
            fill="#850C1A"
          />
          <path
            d="M5.25006 18.05C5.25006 18.14 5.27006 18.22 5.30006 18.31C5.30006 18.32 5.31006 18.33 5.31006 18.33C5.34006 18.4 5.39006 18.47 5.44006 18.52C5.46006 18.54 5.48006 18.56 5.50006 18.57C5.55006 18.61 5.60006 18.65 5.65006 18.67C5.67006 18.68 5.70006 18.69 5.72006 18.7C5.80006 18.73 5.89006 18.75 5.98006 18.75H10.0001C10.4101 18.75 10.7501 18.41 10.7501 18C10.7501 17.59 10.4201 17.28 10.0001 17.28H7.79006L11.5301 13.53C11.8201 13.24 11.8201 12.76 11.5301 12.47C11.3801 12.32 11.1901 12.25 11.0001 12.25C10.8101 12.25 10.6201 12.32 10.4701 12.47L6.74006 16.21L6.74006 14.01C6.74006 13.6 6.40006 13.26 5.99006 13.26C5.58006 13.26 5.24006 13.6 5.24006 14.01L5.24006 18.03C5.24006 18.04 5.24006 18.04 5.25006 18.05Z"
            fill="#850C1A"
          />
        </svg>
      )}
    />
  );
};

export default MenuCollapseInactiveIcon;

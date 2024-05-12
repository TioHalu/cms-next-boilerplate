import type { GetProps } from "antd";
import { Tabs } from "antd";
import React, { forwardRef } from "react";

type TabsType = GetProps<typeof Tabs>;
export type ITabsRef = {};
export type ITabsProps = Omit<TabsType, "ref"> & {};

const ITabs = forwardRef<ITabsRef, ITabsProps>((props, ref) => {
  const { ...tabsProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {};
    },
    [],
  );
  return <Tabs {...tabsProps} />;
});
ITabs.displayName = "ITabs";

export default ITabs;

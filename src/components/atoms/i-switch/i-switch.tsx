import type { GetProps, GetRef } from "antd";
import { Switch } from "antd";
import React, { forwardRef, useRef } from "react";

type SwitchRef = GetRef<typeof Switch>;
type SwitchType = GetProps<typeof Switch>;
export type ISwitchRef = Partial<SwitchRef> & {};
export type ISwitchProps = Omit<SwitchType, "ref"> & {};

const ISwitch = forwardRef<ISwitchRef, ISwitchProps>((props, ref) => {
  const switchRef = useRef<SwitchRef>(null);
  const { ...switchProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...switchRef.current,
      };
    },
    [switchRef],
  );
  return (
    <Switch
      ref={switchRef}
      {...switchProps}
    />
  );
});
ISwitch.displayName = "ISwitch";

export default ISwitch;

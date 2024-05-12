import type { GetProps, GetRef } from "antd";
import { Tooltip } from "antd";
import React, { forwardRef, useRef } from "react";

type TooltipRef = GetRef<typeof Tooltip>;
type TooltipType = GetProps<typeof Tooltip>;
export type ITooltipRef = Partial<TooltipRef> & {};
export type ITooltipProps = Omit<TooltipType, "ref"> & {};

const ITooltip = forwardRef<ITooltipRef, ITooltipProps>((props, ref) => {
  const tooltipRef = useRef<TooltipRef>(null);
  const { ...tooltipProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...tooltipRef.current,
      };
    },
    [tooltipRef],
  );
  return (
    <Tooltip
      ref={tooltipRef}
      {...tooltipProps}
    />
  );
});
ITooltip.displayName = "ITooltip";

export default ITooltip;

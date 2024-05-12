import type { GetProps, GetRef } from "antd";
import { Popover } from "antd";
import React, { forwardRef, useRef } from "react";

type PopoverRef = GetRef<typeof Popover>;
type PopoverType = GetProps<typeof Popover>;
export type IPopoverRef = Partial<PopoverRef> & {};
export type IPopoverProps = Omit<PopoverType, "ref"> & {};

const IPopover = forwardRef<IPopoverRef, IPopoverProps>((props, ref) => {
  const popoverRef = useRef<PopoverRef>(null);
  const { ...popoverProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...popoverRef.current,
      };
    },
    [popoverRef],
  );
  return (
    <Popover
      ref={popoverRef}
      {...popoverProps}
    />
  );
});
IPopover.displayName = "IPopover";

export default IPopover;

import type { GetProps, GetRef } from "antd";
import { Button } from "antd";
import React, { forwardRef, useRef } from "react";

type ButtonRef = GetRef<typeof Button>;
type ButtonType = GetProps<typeof Button>;
export type IButtonRef = Partial<ButtonRef> & {};
export type IButtonProps = Omit<ButtonType, "ref"> & {};

const IButton = forwardRef<IButtonRef, IButtonProps>((props, ref) => {
  const buttonRef = useRef<ButtonRef>(null);
  const { ...buttonProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...buttonRef.current,
      };
    },
    [buttonRef],
  );
  return (
    <Button
      ref={buttonRef}
      {...buttonProps}
    />
  );
});
IButton.displayName = "IButton";

export default IButton;

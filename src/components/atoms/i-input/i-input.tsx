import type { GetProps, GetRef } from "antd";
import { Input } from "antd";
import React, { forwardRef, useRef } from "react";

type InputRef = GetRef<typeof Input>;
type InputType = GetProps<typeof Input>;
export type IInputRef = Partial<InputRef> & {};
export type IInputProps = Omit<InputType, "ref"> & {};

const IInput = forwardRef<IInputRef, IInputProps>((props, ref) => {
  const inputRef = useRef<InputRef>(null);
  const { ...inputProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...inputRef.current,
      };
    },
    [inputRef],
  );
  return (
    <Input
      ref={inputRef}
      {...inputProps}
    />
  );
});
IInput.displayName = "IInput";

export default IInput;

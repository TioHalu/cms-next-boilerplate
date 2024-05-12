import type { GetProps, GetRef } from "antd";
import { Checkbox } from "antd";
import React, { forwardRef, useRef } from "react";

type CheckboxRef = GetRef<typeof Checkbox>;
type CheckboxType = GetProps<typeof Checkbox>;
export type ICheckboxRef = Partial<CheckboxRef> & {};
export type ICheckboxProps = Omit<CheckboxType, "ref"> & {};

const ICheckbox = forwardRef<ICheckboxRef, ICheckboxProps>((props, ref) => {
  const checkboxRef = useRef<CheckboxRef>(null);
  const { ...checkboxProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...checkboxRef.current,
      };
    },
    [checkboxRef],
  );
  return (
    <Checkbox
      ref={checkboxRef}
      {...checkboxProps}
    />
  );
});
ICheckbox.displayName = "ICheckbox";

export default ICheckbox;

import type { GetProps, GetRef } from "antd";
import { Select } from "antd";
import React, { forwardRef, useRef } from "react";

type SelectRef = GetRef<typeof Select>;
type SelectType = GetProps<typeof Select>;
export type ISelectRef = Partial<SelectRef> & {};
export type ISelectProps = Omit<SelectType, "ref"> & {};

const ISelect = forwardRef<ISelectRef, ISelectProps>((props, ref) => {
  const selectRef = useRef<SelectRef>(null);
  const { ...selectProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...selectRef.current,
      };
    },
    [selectRef],
  );
  return (
    <Select
      ref={selectRef}
      {...selectProps}
    />
  );
});
ISelect.displayName = "ISelect";

export default ISelect;

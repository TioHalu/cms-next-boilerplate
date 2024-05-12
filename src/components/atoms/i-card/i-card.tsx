import type { GetProps, GetRef } from "antd";
import { Card } from "antd";
import React, { forwardRef, useRef } from "react";

type CardRef = GetRef<typeof Card>;
type CardType = GetProps<typeof Card>;
export type ICardRef = Partial<CardRef> & {};
export type ICardProps = Omit<CardType, "ref"> & {};

const ICard = forwardRef<ICardRef, ICardProps>((props, ref) => {
  const cardRef = useRef<CardRef>(null);
  const { ...cardProps } = props;
  React.useImperativeHandle(
    ref,
    () => {
      return {
        ...cardRef.current,
      };
    },
    [cardRef],
  );
  return (
    <Card
      ref={cardRef}
      {...cardProps}
    />
  );
});
ICard.displayName = "ICard";

export default ICard;

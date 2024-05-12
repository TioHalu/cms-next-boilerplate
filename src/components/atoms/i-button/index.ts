import { IButtonProps } from "@/components/atoms/i-button/i-button";

export * from "./i-button";

export const SizeIcon = (size: IButtonProps["size"]) => {
  switch (size) {
    case "small":
      return 22;
    case "large":
      return 38;
    default:
      return 30;
  }
};

import { createContext, useContext } from "react";

export type MenuHookProps = {
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
};

export const MenuHookInitialProps: MenuHookProps = {
  isCollapsed: false,
  setCollapsed: (_) => {},
  toggleCollapsed: () => {},
};

export const MenuHookContext =
  createContext<MenuHookProps>(MenuHookInitialProps);

export const useMenuHook = () => useContext(MenuHookContext);

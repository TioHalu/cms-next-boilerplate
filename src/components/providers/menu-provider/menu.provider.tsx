import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  MenuHookContext,
  MenuHookProps,
} from "@/components/hooks/menu-hook/menu-hook";

const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const bp = useBreakpoint(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const menuProviderValue: MenuHookProps = useMemo(() => {
    return {
      isCollapsed: collapsed,
      setCollapsed,
      toggleCollapsed,
    };
  }, [collapsed, toggleCollapsed]);

  useEffect(() => {
    if (bp.lg !== undefined && !bp.lg) {
      setCollapsed(!bp.lg);
    }
  }, [bp]);

  return (
    <MenuHookContext.Provider value={menuProviderValue}>
      {children}
    </MenuHookContext.Provider>
  );
};

export default MenuProvider;

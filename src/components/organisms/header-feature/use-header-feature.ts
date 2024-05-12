import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { dateNow, EnumFormatDate } from "@/utils/date.util";

const useHeaderFeature = () => {
  const router = useRouter();

  const [lastLogin, setLastLogin] = useState("");
  const [lastLogout, setLastLogout] = useState("");
  const [roleName, setRoleName] = useState("");
  const [username, setUsername] = useState("");

  const onClickLogout = async () => {
    await router.replace("/login");
  };

  useEffect(() => {
    setLastLogin(dateNow(EnumFormatDate.DDMMYYYYHHmmss));
    setLastLogout(dateNow(EnumFormatDate.DDMMYYYYHHmmss));
    setUsername("Techno");
    setRoleName("Admin");
  }, []);

  return {
    lastLogin,
    lastLogout,
    roleName,
    username,
    onClickLogout,
  };
};

export default useHeaderFeature;

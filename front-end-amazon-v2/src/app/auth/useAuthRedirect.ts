/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export const useAuthRedirect = () => {
  const { user } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    console.log(user)
    if (user) replace('/')
  }, [user])
}
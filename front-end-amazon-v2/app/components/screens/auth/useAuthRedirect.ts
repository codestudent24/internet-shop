/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const { user } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    console.log(user)
    if (user) replace('/')
  }, [user])
}
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";

const requireAuth = (WrappedComponent: React.FC) => {
  const ComponentWithAuth: React.FC = (props) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const router = useRouter();

    if (!isLoggedIn) {
      router.push("/");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default requireAuth;

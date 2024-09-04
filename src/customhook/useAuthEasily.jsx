import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthEasily = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuthEasily;

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const allContext = useContext(AuthContext);
  return allContext;
};

export default useAuth;

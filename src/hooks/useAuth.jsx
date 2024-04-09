import { useContext } from "react";
import { AuthContext } from "../firebase-provider/FirebaseProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;

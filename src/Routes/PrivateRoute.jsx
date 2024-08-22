import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // login chara amra ei location e jaite nisilam ekhn eita k amra login page e conditional vabe set kore dbo
  const location = useLocation();
  // console.log(location.pathname);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }
// login kora na thakle amra bole dite apri j amra ei state e chilam mane private route ta oita chilo ... ar eita dekha jabe only location.state ta navigate er sathe add kore dile ...normally login logout e dekhabe na ...ekhn amra ki korte pari ta holo amra login page e jeye location niye tar state thakle dtate a jabo noyto home e jabo ei condition add kore dite pari
  return <Navigate to="/login"  state={location.pathname}  replace></Navigate>;
};

export default PrivateRoute;
